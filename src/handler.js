import transformData from './utils/rawDataTransformer.js';
import headerComponent from './components/header/header.js';
import mainComponent from './components/main-content/mainContent.js';
import asideComponent from './components/side-content/aside.js';
import loaderComponent from './components/loader/loaderComponent.js';
import emptyState from './components/empty-state/emptyState.js';

export default class MainHandler {
    constructor({ rootElement, api }) {
        this.rootElement = rootElement;
        this.getWeatherData = api;
        this.state = {
            key: null,
            unit: 'C',
        };
        this.mainDOM = null;
        this.asideDOM = null;
        this.loaderDOM = loaderComponent();
        this.emptyState = emptyState();
        this.loaded = false;
        this.selectedForecast = null;
    }

    getData = async (name) => {
        this.rootElement.append(this.loaderDOM);

        try {
            const weatherData = await this.getWeatherData(name);
            const transformedData = transformData(weatherData);
            this.state.currentData = transformedData;
            
            return {
                status: true
            }
        } catch(err) {
            return {
                status: false,
                error: err.message
            }
        } finally {
            this.loaderDOM.remove();
        }
    }

    navigate = (state) => {
        this.manageRender(this.state, state.datetime, () => {
            this.mainDOM.updateState(
                this.state.currentData.address,
                state,
                this.state.unit,
                this.state.currentData.timezone
            );
        });
    }

    manageRender = (state, key, callback) => {
        if (state.key === key) return;
        state.key = key;
        callback();
    }

    updateRender = () => {
        if (this.selectedForecast !== null) {
            this.mainDOM.updateState(
                this.state.currentData.address,
                this.state.currentData.forecast[this.selectedForecast],
                this.state.unit,
                this.state.currentData.timezone,
            );
            this.asideDOM.updateState(
                this.state.currentData.currentWeather, 
                this.state.currentData.timezone,
                this.state.currentData.forecast,
                this.state.unit,
            );
        } else {
            this.mainDOM.updateState(
                this.state.currentData.address,
                this.state.currentData.currentWeather,
                this.state.unit,
                this.state.currentData.timezone,
            );
            this.asideDOM.updateState(
                this.state.currentData.currentWeather,
                this.state.currentData.timezone,
                this.state.currentData.forecast,
                this.state.unit,
            );
        }
    }

    init = () => {
        this.rootElement.append(this.emptyState);

        this.rootElement.append(
        headerComponent({ 
            onSearch: async (name) => {
                const result = await this.getData(name);

                if (!result.status) {
                    console.log(result.error);
                    return;
                };

                if (!this.loaded) {
                    this.state.key = this.state.currentData.currentWeather.datetime;
                    this.selectedForecast = null;

                    this.mainDOM = mainComponent(
                        this.state.unit,
                        this.state.currentData.timezone,
                        this.state.currentData.address, 
                        this.state.currentData.currentWeather
                    );
                    this.asideDOM = asideComponent(
                        this.state.unit,
                        this.state.currentData.timezone,
                        this.state.currentData.currentWeather,
                        this.state.currentData.forecast,
                        {
                            onReset: () => {
                                this.navigate(this.state.currentData.currentWeather);
                                this.selectedForecast = null;
                            },
                            onToggle: (state) => {
                                state !== true 
                                    ? this.state.unit = 'C' 
                                    : this.state.unit = 'F'
                                ;
                                
                                this.updateRender();
                            },
                            onClick: (index) => {
                                this.navigate(this.state.currentData.forecast[index]);
                                this.selectedForecast = index;
                            },
                        },
                    );

                    this.rootElement.append(this.mainDOM.elementDOM, this.asideDOM.elementDOM);
                    this.loaded = true;
                    this.emptyState.remove();
                }

                this.selectedForecast = null;
                this.updateRender();
                this.emptyState.remove();
            }
        }));
    }
};