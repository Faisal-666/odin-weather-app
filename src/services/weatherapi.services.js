const key = 'DE7B2BB76XZU58RVU9SA7NRKH';

const getWeatherData = async (name) => {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}/next7days/next6days?unitGroup=metric&elements=conditions%2Cdatetime%2CdatetimeEpoch%2Cfeelslike%2Chumidity%2Cicon%2Cname%2Coffset%2Csource%2Cstations%2Ctemp%2Cwindspeed&include=current&key=${key}&contentType=json`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const weatherData = await response.json();
        
    return weatherData;
};

export default getWeatherData;