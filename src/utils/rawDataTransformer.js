const transformData = (data) => {
    const { address, timezone, tzoffset, days } = data;

    const formatted = {
        address,
        timezone,
        tzoffset,
        currentWeather: days.filter(obj => obj.source === 'comb')[0],
        forcast: days.filter(obj => obj.source === 'fcst'),
    };

    return formatted;
};

export default transformData;