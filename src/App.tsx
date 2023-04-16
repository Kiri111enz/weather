import { useState } from 'react';
import WeatherInfo from 'components/WeatherInfo';
import { fetchIpData, fetchWeatherData, WeatherData } from 'services/http';
import { chooseBg } from 'utils/bg';

const initialCity = (await fetchIpData()).city;
const initialWeather = await fetchWeatherData(initialCity);
const initialBg = initialWeather !== null ? chooseBg(initialWeather) : 'day-warm';

const App: React.FC = () => {
    const UPDATE_DELAY = 60;

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState<WeatherData | null>(initialWeather);
    const [bg, setBg] = useState(initialBg);
    const [updateTask, setUpdateTask] = useState<number>(() => 
        setInterval(() => updateWeather(initialCity), UPDATE_DELAY * 1000)
    );

    const updateWeather = (query: string): void => {
        console.log('hui');
        fetchWeatherData(query)
            .then(data => {
                setWeather(data);
                setBg(chooseBg(data));
            })
            .catch(() => {
                setWeather(null);
                clearInterval(updateTask + 1);
            });
    };

    const scheduleUpdate = (): void => {
        clearInterval(updateTask);
        setUpdateTask(setInterval(() => updateWeather(query), UPDATE_DELAY * 1000));
    };

    const submit = (event: React.FormEvent): void => {
        event.preventDefault();
        updateWeather(query);
        scheduleUpdate();
        setQuery('');
    };

    return (
        <div className={`bg ${bg}`}>
            <div id="app">
                <form onSubmit={submit}>
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