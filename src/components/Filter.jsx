function Filter({ filter, setFilter }) {
  return (
    <div>
      countries filter{' '}
      <input
        type="text"
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
    </div>
  );
}

export default Filter;
