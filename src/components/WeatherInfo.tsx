import { WeatherData } from 'services/http';
import { textFromDate } from 'utils/date';

const WeatherInfo: React.FC<{ weather: WeatherData }> = ({ weather }) => (
    <div id="weather-info">
        <span id="location">{weather.city}, {weather.countryCode}</span>
        <span id="date">{textFromDate(weather.date)}</span>
        <span id="temp">{Math.round(weather.temp)}°C</span>
        <span id="details">{weather.details}</span>
    </div>
);

export default WeatherInfo;