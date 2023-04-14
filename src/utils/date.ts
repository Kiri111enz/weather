const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'Jule',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const textFromDate = (date: Date): string => {
    const weekDay = WEEK_DAYS[date.getDay()];
    const day = date.getDate();
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();
    return `${weekDay}, ${day} ${month} ${year}`;
};