import React from 'react';

function Weather({ data }) {
  const d = new Date();
  const year = d.getFullYear();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const currDate = `${date} ${month} ${year}`;
  
  const placeName = data.name;
  const temp = Math.round(data.main.temp);
  const weather = data.weather[0].main;
  const maximumTemp = Math.round(data.main.temp_max);
  const minimumTemp = Math.round(data.main.temp_min);
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div>
      <div id="result">
        <h3 className="mt-5">{placeName}</h3>
        <p>{currDate}</p>
        <h1>{temp} °C</h1><br />
        <h4>{weather}</h4>
        <p>{maximumTemp}°C / {minimumTemp}°C</p>
      </div>
      <div id="icon">
        <img src={icon} alt={weather} />
      </div>
    </div>
  );
}

export default Weather;
