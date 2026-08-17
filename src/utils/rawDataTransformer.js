const transformData = (data) => {
    const { address, timezone, tzoffset, days } = data;

    const formatted = {
        address,
        timezone,
        tzoffset,
        currentWeather: days.find(obj => obj.source === 'comb'),
        forecast: days.filter(obj => obj.source === 'fcst'),
    };

    return formatted;
};

export default transformData;