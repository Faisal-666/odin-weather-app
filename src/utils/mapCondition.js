import { fromUnixTime } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

import defaultBg from '../assets/images/default-bg.webp';

import clearAfternoon from '../assets/images/Clear-afternoon.jpeg'; 
import clearEvening from '../assets/images/Clear-evening.jpeg';
import clearMorning from '../assets/images/Clear-morning.jpeg';
import clearNight from '../assets/images/Clear-night.jpeg';

import cloudyOvercastAfternoon from '../assets/images/Cloudy-Overcast-afternoon.jpeg';
import cloudyOvercastEvening from '../assets/images/Cloudy-Overcast-evening.jpeg';
import cloudyOvercastMorning from '../assets/images/Cloudy-Overcast-morning.jpeg';
import cloudyOvercastNight from '../assets/images/Cloudy-Overcast-night.jpeg';

import fogAfternoon from '../assets/images/Fog-afternoon.jpeg';
import fogEvening from '../assets/images/Fog-evening.jpeg';
import fogMorning from '../assets/images/Fog-morning.jpeg';
import fogNight from '../assets/images/Fog-night.jpeg';

import freezingSleetAfternoon from '../assets/images/Freezing-Sleet-afternoon.jpeg';
import freezingSleetEvening from '../assets/images/Freezing-Sleet-evening.jpeg';
import freezingSleetMorning from '../assets/images/Freezing-Sleet-morning.jpeg';
import freezingSleetNight from '../assets/images/Freezing-Sleet-night.jpeg';

import rainAfternoon from '../assets/images/Rain-afternoon.jpeg';
import rainEvening from '../assets/images/Rain-evening.jpeg';
import rainMorning from '../assets/images/Rain-morning.jpeg';
import rainNight from '../assets/images/Rain-night.jpeg';

import snowAfternoon from '../assets/images/Snow-afternoon.jpeg';
import snowEvening from '../assets/images/Snow-evening.jpeg';
import snowMorning from '../assets/images/Snow-morning.jpeg';
import snowNight from '../assets/images/Snow-night.jpeg';

import thunderstormAfternoon from '../assets/images/Thunderstorm-afternoon.jpeg';
import thunderstormEvening from '../assets/images/Thunderstorm-evening.jpeg';
import thunderstormMorning from '../assets/images/Thunderstorm-morning.jpeg';
import thunderstormNight from '../assets/images/Thunderstorm-night.jpeg';

const conditionBg = {
    clear: {
        afternoon: clearAfternoon,
        evening: clearEvening,
        morning: clearMorning,
        night: clearNight,
    },
    cloudyOvercast: {
        afternoon: cloudyOvercastAfternoon,
        evening: cloudyOvercastEvening,
        morning: cloudyOvercastMorning,
        night: cloudyOvercastNight,
    },
    fog: {
        afternoon: fogAfternoon,
        evening: fogEvening,
        morning: fogMorning,
        night: fogNight,
    },
    freezingSleet: {
        afternoon: freezingSleetAfternoon,
        evening: freezingSleetEvening,
        morning: freezingSleetMorning,
        night: freezingSleetNight,
    },
    rain: {
        afternoon: rainAfternoon,
        evening: rainEvening,
        morning: rainMorning,
        night: rainNight,
    },
    snow: {
        afternoon: snowAfternoon,
        evening: snowEvening,
        morning: snowMorning,
        night: snowNight,
    },
    thunderstorm: {
        afternoon: thunderstormAfternoon,
        evening: thunderstormEvening,
        morning: thunderstormMorning,
        night: thunderstormNight,
    },
    defaultBg
};

const conditionKey = {
    clear: 'clear',
    cloudy: 'cloudyOvercast',
    overcast: 'cloudyOvercast',
    ice: 'snow',
    freezing: 'freezingSleet',
    sleet: 'freezingSleet',
    drizzle: 'snow',
    rain: 'rain',
    snow: 'snow',
    fog: 'fog',
    thunderstorm: 'thunderstorm',
    hail: 'snow',
}
 
const mapCondition = (condition) => {
    const splitted = condition.includes(',') 
        ? condition.split(', ')
        : condition.split(' ')
    ;

    if (splitted[0] === 'Partially') {
        return splitted[1].toLowerCase();
    } else {
        if (splitted[0].includes(' ')) {
            return splitted[0].split(' ')[0].toLowerCase();
        }
        return splitted[0].toLowerCase();
    }
};

const getTimeOfDay = (datetimeEpoch, timezone) => {
    const date = fromUnixTime(datetimeEpoch);
    const hour = Number(formatInTimeZone(date, timezone, 'H'));

    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 18) return 'afternoon';
    if (hour >= 18 && hour < 21) return 'evening';

    return 'night';
};

export { conditionBg, conditionKey, mapCondition, getTimeOfDay };
