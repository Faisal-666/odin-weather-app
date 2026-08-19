import { conditionBg, conditionKey, mapCondition, getTimeOfDay } from './mapCondition.js';

const bgChanger = (condition, datetimeEpoch, timezone) => {
    const body = document.querySelector('body');

    const key = conditionKey[mapCondition(condition)];
    const time = getTimeOfDay(datetimeEpoch, timezone);

    const background = key
        ?   conditionBg[key][time]
        :   condition.defaultBg
    ;

    body.style.background = `
        url(${background}) no-repeat center / cover
    `;
};

export default bgChanger;