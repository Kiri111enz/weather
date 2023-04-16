import { WeatherData } from 'services/http';

export const chooseBg = (weather: WeatherData): string => {
    const hours = weather.date.getHours();
    const timeOfDay = hours > 4 && hours < 20 ? 'day' : 'night';
    const temp = weather.temp > 0 ? 'warm' : 'cold';
    return `${timeOfDay}-${temp}`;
};