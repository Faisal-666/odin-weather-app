import './styles/global.css';
import 'iconify-icon';
import headerComponent from './components/header/header.js';
import getWeatherData from './services/weatherapi.services.js';

document.querySelector('body').append(headerComponent({ onSearch: console.log }));

// (async () => {
//     const data = await getWeatherData('Bandung');
//     console.log(data);
// })();