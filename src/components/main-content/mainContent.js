import './style.css';
import formatDatetimeEpoch from '../../utils/formatTimeEpoch.js';
import { parseISO, format } from 'date-fns';
import bgChanger from '../../utils/backgroundChanger.js';
import displayTemp from '../../utils/displayTemp.js';

const mainComponent = (unit, timezone, address, weather) => {
    const main = document.createElement('main');
    main.dataset.desc = weather.description;
    main.dataset.station = weather.station ? weather.station : '';

    bgChanger(weather.conditions, weather.datetimeEpoch, timezone);

    main.innerHTML = `
        <div>
            <h2 class="location">${address}</h2>
            <span class="date">${format(parseISO(formatDatetimeEpoch(weather.datetimeEpoch, timezone)), 'EEEE, dd MMMM')}</span>
        </div>
        
        <div>
            <div class="temp-wrapper">
                <iconify-icon icon="meteocons:${weather.icon}-fill"></iconify-icon>
                <span class="temp">${displayTemp(weather.temp, unit)}</span>
            </div>
            
            <div>Feels like <span class="feels-like">${displayTemp(weather.feelslike, unit)}</span></div>
            <div>
                <span class="condition">${weather.conditions}</span> • Humidity 
                <span class="humidity">${weather.humidity}</span>% • Wind
                <span class="windspeed">${weather.windspeed}</span> km/h
            </div>
        </div>
    `;

    const updateState = (address, state, currentUnit, currentTZ) => {
        main.dataset.desc = state.description;
        main.dataset.station = state.station ? state.station : '';

        bgChanger(state.conditions, state.datetimeEpoch, currentTZ);

        main.querySelector('.location').textContent = address;
        main.querySelector('span.date').textContent = format(parseISO(formatDatetimeEpoch(state.datetimeEpoch, currentTZ)), 'EEEE, dd MMMM');
        main.querySelector('.temp-wrapper [icon]').setAttribute('icon', `meteocons:${state.icon}-fill`);
        main.querySelector('.temp').textContent = displayTemp(state.temp, currentUnit);
        main.querySelector('.feels-like').textContent = displayTemp(state.feelslike, currentUnit);
        main.querySelector('.condition').textContent = state.conditions;
        main.querySelector('.humidity').textContent = state.humidity;
        main.querySelector('.windspeed').textContent = state.windspeed;
    };
    
    return {
        elementDOM: main,
        updateState
    };
};

export default mainComponent;