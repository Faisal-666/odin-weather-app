import './style.css';
import { parseISO, format } from 'date-fns';

const mainComponent = (unit, address, weather) => {
    const main = document.createElement('main');
    main.dataset.datetimeEpoch = weather.datetimeEpoch;
    main.dataset.desc = weather.description;
    main.dataset.station = weather.station ? weather.station : '';

    main.innerHTML = `
        <div>
            <h2 class="location">${address}</h2>
            <span class="date">${format(parseISO(weather.datetime), 'EEEE, dd MMMM')}</span>
        </div>
        
        <div>
            <div class="temp-wrapper">
                <iconify-icon icon="meteocons:${weather.icon}-fill"></iconify-icon>
                <span class="temp">${weather.temp}° ${unit}</span>
            </div>
            
            <div>Feels like <span class="feels-like">${weather.feelslike}° ${unit}</span></div>
            <div>
                <span class="condition">${weather.conditions}</span> • Humidity 
                <span class="humidity">${weather.humidity}</span>% • Wind
                <span class="windspeed">${weather.windspeed}</span> km/h
            </div>
        </div>
    `;

    const updateState = (state, currentUnit) => {
        main.dataset.datetimeEpoch = state.datetimeEpoch;
        main.dataset.desc = state.description;
        main.dataset.station = state.station ? state.station : '';

        main.querySelector('span.date').textContent = format(parseISO(state.datetime), 'EEEE, dd MMMM');
        main.querySelector('.temp-wrapper [icon]').setAttribute('icon', `meteocons:${state.icon}-fill`);
        main.querySelector('.temp').textContent = `${state.temp}° ${currentUnit}`;
        main.querySelector('.feels-like').textContent = state.feelslike;
        main.querySelector('.condition').textContent = state.conditions;
        main.querySelector('.humidity').textContent = state.humidity;
        main.querySelector('.windspeed').textContent = state.windspeed;

        return;
    };
    
    return {
        elementDOM: main,
        updateState
    };
};

export default mainComponent;