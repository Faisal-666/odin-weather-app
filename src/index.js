import './styles/global.css';
import 'iconify-icon';

import MainHandler from './handler.js';
import getWeatherData from './services/weatherapi.services.js';

const app = new MainHandler({
    rootElement: document.querySelector('body'),
    api: getWeatherData,
});

app.init();