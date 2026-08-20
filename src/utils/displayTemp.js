const displayTemp = (value, unit) => {
    return unit === 'C'
        ? `${value}° ${unit}`
        : `${Number(((value * 9 / 5) + 32).toFixed(1))}° ${unit}`
    ;
};

export default displayTemp;