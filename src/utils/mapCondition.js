import { fromUnixTime } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

import defaultBg from '../assets/images/default-bg.webp';

import clearAfternoon from '../assets/images/Clear-afternoon.webp'; 
import clearEvening from '../assets/images/Clear-evening.webp';
import clearMorning from '../assets/images/Clear-morning.webp';
import clearNight from '../assets/images/Clear-night.webp';

import cloudyOvercastAfternoon from '../assets/images/Cloudy-Overcast-afternoon.webp';
import cloudyOvercastEvening from '../assets/images/Cloudy-Overcast-evening.webp';
import cloudyOvercastMorning from '../assets/images/Cloudy-Overcast-morning.webp';
import cloudyOvercastNight from '../assets/images/Cloudy-Overcast-night.webp';

import fogAfternoon from '../assets/images/Fog-afternoon.webp';
import fogEvening from '../assets/images/Fog-evening.webp';
import fogMorning from '../assets/images/Fog-morning.webp';
import fogNight from '../assets/images/Fog-night.webp';

import freezingSleetAfternoon from '../assets/images/Freezing-Sleet-afternoon.webp';
import freezingSleetEvening from '../assets/images/Freezing-Sleet-evening.webp';
import freezingSleetMorning from '../assets/images/Freezing-Sleet-morning.webp';
import freezingSleetNight from '../assets/images/Freezing-Sleet-night.webp';

import rainAfternoon from '../assets/images/Rain-afternoon.webp';
import rainEvening from '../assets/images/Rain-evening.webp';
import rainMorning from '../assets/images/Rain-morning.webp';
import rainNight from '../assets/images/Rain-night.webp';

import snowAfternoon from '../assets/images/Snow-afternoon.webp';
import snowEvening from '../assets/images/Snow-evening.webp';
import snowMorning from '../assets/images/Snow-morning.webp';
import snowNight from '../assets/images/Snow-night.webp';

import thunderstormAfternoon from '../assets/images/Thunderstorm-afternoon.webp';
import thunderstormEvening from '../assets/images/Thunderstorm-evening.webp';
import thunderstormMorning from '../assets/images/Thunderstorm-morning.webp';
import thunderstormNight from '../assets/images/Thunderstorm-night.webp';

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
    defaultBg,
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
};
 
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
