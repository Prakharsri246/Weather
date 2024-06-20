import React, { useEffect, useState } from 'react';

const Tempapp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const api_key = "ffd47c860620a451ab9cc09dfe45a98c";
  const units = 'metric';

  const handleOnChange = (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    if (newCity === '') {
      setWeather(null);
      setError(null);
    }
  }

  const handleCityWeather = async () => {
    if (city) {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=${units}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setWeather(null);
        setError(err.message);
      }
    }
  }

  useEffect(() => {
    handleCityWeather();
  }, [city]);

  return (
    <div className='temp-div'>
      <div>
        <div className='heading'>
          <h2>Enter Your Location</h2>
        </div>
        <div>
          <input
            className='input-box'
            onChange={handleOnChange}
            placeholder='Enter city name'
          />
        </div>
        {weather && (
          <div className='weather-info'>
            <h3>Weather in {weather.name}</h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
        {error && (
          <div className='error-message'>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tempapp;
