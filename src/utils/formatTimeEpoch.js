import { fromUnixTime} from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

const formatDatetimeEpoch = (datetimeEpoch, timezone) => {
    return formatInTimeZone(
        fromUnixTime(datetimeEpoch),
        timezone,
        'yyyy-MM-dd'
    );
};

export default formatDatetimeEpoch;