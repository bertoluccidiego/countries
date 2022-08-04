import { useState } from 'react';

import Countries from './components/Countries';
import Filter from './components/Filter';

function App() {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <h1>Countries</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries filter={filter} />
    </div>
  );
}

export default App;
