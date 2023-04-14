import { WeatherData } from 'services/http';
import { textFromDate } from 'utils/date';

const WeatherInfo: React.FC<{ weather: WeatherData }> = ({ weather }) => (
    <div id="weather-info" className="text-white">
        <span id="location" className="text-shadow">{weather.city}, {weather.countryCode}</span>
        <span id="date" className="text-shadow">{textFromDate(weather.date)}</span>
        <span id="temp" className="abs-centered text-shadow">{Math.round(weather.temp)}°C</span>
        <span id="details" className="text-shadow">{weather.details}</span>
    </div>
);

export default WeatherInfo;