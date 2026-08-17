import './style.css';
import { parseISO, format } from 'date-fns';

const mainComponent = (address, currentWeather) => {
    console.log(currentWeather);
    const main = document.createElement('main');
    main.dataset.datetimeEpoch = currentWeather.datetimeEpoch;
    main.dataset.desc = currentWeather.description;
    main.dataset.station = currentWeather.station ? currentWeather.station : '';

    main.innerHTML = `
        <div>
            <h2 class="location">${address}</h2>
            <span class="date">${format(parseISO(currentWeather.datetime), 'EEEE, dd MMMM')}</span>
        </div>
        
        <div>
            <div class="temp-wrapper">
                <iconify-icon icon="meteocons:${currentWeather.icon}-fill"></iconify-icon>
                <span class="temp">${currentWeather.temp}° <span class="unit">C</span></span>
            </div>
            
            <div>Feels like ${currentWeather.feelslike}° <span class="unit">C</span></div>
            <div>${currentWeather.conditions} • Humidity ${currentWeather.humidity}% • Wind ${currentWeather.windspeed} km/h</div>
        </div>
    `;

    return main;
};

export default mainComponent;