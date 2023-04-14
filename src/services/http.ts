const API_URLS = {
    ip: 'https://ipinfo.io/json',
    weather: 'https://api.openweathermap.org/data/2.5/weather'
};

const fetchAsJson = async (url: string): Promise<unknown> => {
    return await (await fetch(url)).json();
};

export interface IpData {
    city: string,
}

export const fetchIpData = async (): Promise<IpData> => { 
    return await fetchAsJson(`${API_URLS.ip}?token=${import.meta.env.VITE_IP_API_KEY}`) as IpData;
};

export interface WeatherData {
    city: string,
    countryCode: string,
    date: Date,
    temp: number,
    details: string
}

const recalculateDate = (initial: Date, timezoneSec: number): Date => {
    return new Date(initial.getTime() + initial.getTimezoneOffset() * 60 * 1000 + timezoneSec);
};

export const fetchWeatherData = async (query: string): Promise<WeatherData> => {
    const data = await fetchAsJson(`${API_URLS.weather}` +
        `?q=${query}&units=metric&APPID=${import.meta.env.VITE_WEATHER_API_KEY}`) as any;
    return {
        city: data.name,
        countryCode: data.sys.country,
        date: recalculateDate(new Date(), data.timezone * 1000),
        temp: data.main.temp,
        details: data.weather[0].main
    };
};