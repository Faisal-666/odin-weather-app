import './style.css';
import { parseISO, format } from 'date-fns';

const asideComponent = (forecasts, { onClick, onToggle }) => {
    const aside = document.createElement('aside');
    aside.innerHTML = `
        <div class="current">
            <span>Current</span>
        </div>
        <div class="toggle-container">
            <div id="toggle-btn">
                <input type="checkbox" id="check">
                <label for="check"></label>

                <span class="temp-left">°C</span>
                <span class="temp-right">°F</span>
            </div>
        </div>
        <div id="forecast">
            <h3>Forecast</h3>
        </div>
    `;

    forecasts.forEach((obj, index) => {
        const [ day ] = format(parseISO(obj.datetime), 'E, dd MMMM').split(', ');

        aside.innerHTML += `
            <div class="forecast-item next-${index + 1}" data-index="${index}">
                <div class="day">${day}</div>
                <iconify-icon icon="meteocons:${obj.icon}-fill"></iconify-icon>
                <span class="temp">${obj.temp}° <span class="unit">C</span></span>
            </div>
        `;
    });

    const forecastItems = aside.querySelectorAll('.forecast-item');
    forecastItems.forEach(item => item.onclick = () => onClick(Number(item.dataset.index)));
    
    return aside;
};

export default asideComponent;