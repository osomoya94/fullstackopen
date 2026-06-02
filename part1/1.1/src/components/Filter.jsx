const Filter = ({ newFilterName, handleFilterName }) => {
  return (
    <div>
      filtar: <input value={newFilterName} onChange={handleFilterName} />
    </div>
  );
};

export default Filter;
