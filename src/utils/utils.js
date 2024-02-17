import iso8601Duration from 'iso8601-duration';

export const convertFromISO = async (durationISO8601) => {
    const durationObject = iso8601Duration.parse(durationISO8601);
    
    const formattedHours = durationObject.hours > 0 ? String(durationObject.hours).padStart(2, '0') + ':' : '';
    const formattedMinutes = String(durationObject.minutes).padStart(2, '0');
    const formattedSeconds = String(durationObject.seconds).padStart(2, '0');
    
    const result = formattedHours + formattedMinutes + ':' + formattedSeconds;

    return result;
}
