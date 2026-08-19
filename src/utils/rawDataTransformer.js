const transformData = (data) => {
    const {
        address,
        timezone, 
        tzoffset, 
        currentConditions,
        days 
    } = data;

    const formatted = {
        address,
        timezone,
        tzoffset,
        currentWeather: currentConditions,
        forecast: days.filter(obj => obj.source === 'fcst'),
    };

    return formatted;
};

export default transformData;