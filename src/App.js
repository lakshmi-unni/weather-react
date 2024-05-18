import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [place, setPlace] = useState('');
  const [error, setError] = useState('');

  const findWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
      .then(res => {
        if (!res.ok) {
          throw new Error('No city found');
        }
        return res.json();
      })
      .then(data => {
        setWeatherData(data);
        setError('');
      })
      .catch(err => {
        setWeatherData(null);
        setError(`There is no city ${place}`);
      });
  };

  const clearWeather = () => {
    setWeatherData(null);
    setPlace('');
    setError('');
  };

  return (
    <div className="container">
      <div className="row text-center mt-5" id="head">
        <h1 className="mt-3">Weather App</h1>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-lg-4 col-sm-12 col-xs-12 text-center" id="content">
          <input
            type="text"
            id="place"
            className="form-control rounded-bottom mt-4 text-center"
            placeholder="Enter the City"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <div className="button-group mt-4">
            <button className="btn btn-primary mx-2" id="findButton" onClick={findWeather}>
              Find
            </button>
            <button className="btn btn-secondary mx-2" id="clearButton" onClick={clearWeather}>
              Clear
            </button>
          </div>
          {error && <div className="alert mt-4">{error}</div>}
          {weatherData && <Weather data={weatherData} />}
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default App;
