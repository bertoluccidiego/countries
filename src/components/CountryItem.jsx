import { useState } from 'react';

import Country from './Country';

function CountryItem({ country }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <li>
      {showFull ? <Country country={country} /> : country.name.common}
      <button type="button" onClick={() => setShowFull(!showFull)}>
        {showFull ? 'hide' : 'show'}
      </button>
    </li>
  );
}

export default CountryItem;
