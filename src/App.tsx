import { textFromDate } from 'utils/date';

const App: React.FC = () => {
    return (
        <div className="bg day-warm">
            <div id="app">
                <input id="search-bar" type="text" placeholder="Type your town here..." />
                <div id="weather-info">
                    <span id="location" className="shadow-std">Moscow, Russia</span>
                    <span id="date" className="shadow-std">{textFromDate(new Date())}</span>
                    <span id="temp" className="shadow-std">15°C</span>
                    <span id="details" className="shadow-std">Sunny</span>
                </div>
            </div>
        </div>
    );
};

export default App;