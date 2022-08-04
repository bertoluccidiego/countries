function Country({ country }) {
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

  return (
    <div>
      <h2>{country.name.common.toUpperCase()}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      {languagesRender()}
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  );
}

export default Country;
