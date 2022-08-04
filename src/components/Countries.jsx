import { useState, useEffect } from 'react';

import Country from './Country';
import CountryItem from './CountryItem';

import countriesService from '../services/countries';

function Countries({ filter }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((result) => setCountries(result));
  }, []);

  const filteredCountries = filter
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  if (filteredCountries.length === 0) {
    return <div>No matches</div>;
  }

  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />;
  }

  if (filteredCountries.length <= 10) {
    return (
      <div>
        <ul>
          {filteredCountries.map((country) => (
            <CountryItem key={country.cca2} country={country} />
          ))}
        </ul>
      </div>
    );
  }

  if (filteredCountries.length > 10) {
    return <div>Too many matches.</div>;
  }
}

export default Countries;
