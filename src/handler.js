import transformData from './utils/rawDataTransformer.js';
import headerComponent from './components/header/header.js';
import mainComponent from './components/main-content/mainContent.js';
import asideComponent from './components/side-content/aside.js';

export default class MainHandler {
    constructor({ rootElement, api }) {
        this.rootElement = rootElement;
        this.getWeatherData = api;
        this.state = {};
    }

    getData = async (name) => {
        const weatherData = await this.getWeatherData();
        const transformedData = transformData(weatherData);
        this.state.currentData = transformedData;
    }

    render = async () => {
        this.rootElement.append(mainComponent(this.state.currentData.address, this.state.currentData.currentWeather));
        this.rootElement.append(asideComponent(this.state.currentData.forecast, { onClick: (data) => console.log(data) }));
    }

    init = () => {
       this.rootElement.append(headerComponent({ onSearch: async (name) => {
        await this.getData(name);
        
        this.render();
       }}));
    }
};
