import { useState } from 'react';
import './App.css';
import { MdOutlineCloudQueue } from 'react-icons/md';
import { MdCloudySnowing } from 'react-icons/md';
import { GoSun } from 'react-icons/go';
import { LiaCloudRainSolid } from 'react-icons/lia';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = 'fd126433105dd6a1794986d5cd7de25c';

  const getWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const cityResponse = await fetch(URL);

      if (!cityResponse.ok) {
        throw new Error('City Not Found!!');
      }

      const cityData = await cityResponse.json();

      setWeather(cityData);
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
    <div className='weather-app flex flex-column justify-center align-center g-5'>
      <div className='input-group'>
        <h1>Weather App</h1>
        <div className='flex justify-center align-center'>
          <input
            type='text'
            placeholder='Enter City...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Get Weather</button>
        </div>
      </div>
      {error && <p className='error'>{error}</p>}
      {weather && (
        <div className='weather-info flex flex-column align-start'>
          <div className='location flex align-center g-1'>
            <h1>{weather.name}</h1>
            <p>({weather.sys.country})</p>
          </div>
          <div className='flex g-5'>
            <div className='flex g-4'>
              <div className='icon'>
                <MdOutlineCloudQueue />
              </div>
              <div className='description'>
                <h1 className='fs-5'>{Math.round(weather.main.temp)}°C</h1>
              </div>
            </div>
            <div className='flex flex-column g-5'>
              <div className='flex g-3'>
                <div className='inline-flex flex-column align-center'>
                  <h1>{weather.main.temp_max}°C</h1>
                  <p>Temp Max</p>
                </div>
                <div className='inline-flex flex-column align-center'>
                  <h1>{weather.wind.speed}km/h</h1>
                  <p>Wind Speed</p>
                </div>
                <div className='inline-flex flex-column align-center'>
                  <h1>{formateTime(weather.sys.sunrise)}</h1>
                  <p>Sunrise</p>
                </div>
              </div>
              <div className='flex g-3'>
                <div className='inline-flex flex-column align-center'>
                  <h1>{weather.main.temp_min}°C</h1>
                  <p>Low</p>
                </div>
                <div className='inline-flex flex-column align-center'>
                  <h1>{weather.main.humidity}%</h1>
                  <p>Humidity</p>
                </div>
                <div className='inline-flex flex-column align-center ms-4'>
                  <h1>{formateTime(weather.sys.sunset)}</h1>
                  <p>Sunset</p>
                </div>
              </div>
            </div>
          </div>
          {/* <h2>{weather.name}</h2>
          <h3>{weather.weather[0].main}</h3>
          <h4>{weather.weather[0].description}</h4>
          <h5>{weather.main.temp}°C</h5>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Sunrise: {formateTime(weather.sys.sunrise)}</p>
          <p>Sunset: {formateTime(weather.sys.sunset)}</p> */}
        </div>
      )}
    </div>
  );
}

export default App;
