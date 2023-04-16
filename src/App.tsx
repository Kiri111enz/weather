import { useState } from 'react';
import WeatherInfo from 'components/WeatherInfo';
import { fetchIpData, fetchWeatherData, WeatherData } from 'services/http';

const ipData = await fetchIpData();
const weatherData = await fetchWeatherData(ipData.city);

const App: React.FC = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState<WeatherData | null>(weatherData);

    const updateWeather = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        fetchWeatherData(query)
            .then(data => setWeather(data))
            .catch(() => setWeather(null));
        setQuery('');
    };

    return (
        <div className="bg day-warm">
            <div id="app">
                <form onSubmit={updateWeather}>
                    <input id="search-bar" type="text" placeholder="Location..."
                        onChange={e => setQuery(e.target.value)} value={query} />
                </form>
                {weather !== null ?
                    <WeatherInfo weather={weather} /> 
                    : 
                    <span className="abs-centered text-center text-white text-shadow">
                        Sorry, seems like a wrong location...
                    </span>
                }
            </div>
        </div>
    );
};

export default App;