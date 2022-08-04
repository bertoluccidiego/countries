import { useState, useEffect } from 'react';

import weatherService from '../services/weather';

function Country({ country }) {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    weatherService.get(country.capital).then((result) => setWeather(result));
  }, [country]);

  if (!country) {
    return null;
  }

  function languagesRender() {
    if (Object.keys(country.languages).length === 1) {
      return (
        <p>language {country.languages[Object.keys(country.languages)[0]]}</p>
      );
    }

    return (
      <div>
        <h3>Languages:</h3>
        <ul>
          {Object.keys(country.languages).map((lang) => (
            <li key={lang}>{country.languages[lang]}</li>
          ))}
        </ul>
      </div>
    );
  }

  function weatherRender() {
    if (!weather) {
      return null;
    }

    return (
      <div>
        <h3>Weather in {country.capital}</h3>
        <p>temperature {weather.main.temp} °C</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{country.name.common.toUpperCase()}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      {languagesRender()}
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      {weatherRender()}
    </div>
  );
}

export default Country;
