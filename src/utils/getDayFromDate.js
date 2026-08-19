import { format, parseISO } from 'date-fns';

const getDay = (datetime) => {
    const [ day ] = format(parseISO(datetime), 'E, dd MMMM').split(', ');

    return day;
};

export default getDay;