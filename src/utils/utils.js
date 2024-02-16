import iso8601Duration from 'iso8601-duration';

export const convertFromISO = async (durationISO8601) => {
    const durationObject = iso8601Duration.parse(durationISO8601);
    return `${durationObject.minutes}:${durationObject.seconds}`;
}
