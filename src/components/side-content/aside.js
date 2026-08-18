import './style.css';
import { parseISO, format } from 'date-fns';

const getDay = (datetime) => {
    const [ day ] = format(parseISO(datetime), 'E, dd MMMM').split(', ');

    return day;
};

const asideComponent = (unit, current, forecast, { onReset, onClick, onToggle }) => {
    const aside = document.createElement('aside');
    aside.innerHTML = `
        <div class="current">
            <span>Current</span>
            <div>${format(parseISO(current.datetime), 'EEEE, dd MMMM')}</div>
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

    forecast.forEach((obj, index) => {
        aside.innerHTML += `
            <div class="forecast-item next-${index + 1}" data-index="${index}">
                <div class="day">${getDay(obj.datetime)}</div>
                <iconify-icon icon="meteocons:${obj.icon}"></iconify-icon>
                <span class="temp">${obj.temp}° ${unit}</span>
            </div>
        `;
    });

    const currentWeather = aside.querySelector('div.current');
    currentWeather.onclick = () => onReset();

    const toggleBtn = aside.querySelector('label[for="check"]');
    const unitValue = aside.querySelector('#check');
    unitValue.onclick = () => onToggle(unitValue.checked);

    const forecastItems = aside.querySelectorAll('.forecast-item');
    forecastItems.forEach(item => item.onclick = () => onClick(Number(item.dataset.index)));
    
    const updateState = (weather, forecastCurrent, currentUnit) => {
        aside.querySelector('.current > div').textContent = `${format(parseISO(weather.datetime), 'EEEE, dd MMMM')}`;
        aside.querySelectorAll('.forecast-item').forEach((element, index) => {
            element.querySelector('.day').textContent = getDay(forecastCurrent[index].datetime);
            element.querySelector('[icon]').setAttribute('icon', `meteocons:${forecastCurrent[index].icon}`);
            element.querySelector('.temp').textContent = `${forecastCurrent[index].temp}° ${currentUnit}`;
        });

        return;
    };

    return {
        elementDOM: aside,
        updateState,
    };
};

export default asideComponent;