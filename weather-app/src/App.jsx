import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'fd126433105dd6a1794986d5cd7de25c';

  const getWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error('City Not Found!!');
      }

      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };

  const formateTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  console.log(weather);

  return (
    <div className='weather-app'>
      <h1>Weather App</h1>
      <input
        type='text'
        placeholder='Enter City...'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p className='error'>{error}</p>}
      {weather && (
        <div className='weather-info'>
          <h2>{weather.name}</h2>
          <h3>{weather.weather[0].main}</h3>
          <h4>{weather.weather[0].description}</h4>
          <h5>{weather.main.temp}°C</h5>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Sunrise: {formateTime(weather.sys.sunrise)}</p>
          <p>Sunset: {formateTime(weather.sys.sunset)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
