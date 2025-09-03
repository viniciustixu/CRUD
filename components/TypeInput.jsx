export default function TypeInput({ type, setType }) {
  const handleChange = (e) => {
    const newType = e.target.value;
    setType(newType);
  };

  return (
    <select onChange={handleChange} value={type} className='select'>
      <option value='movie'>movie</option>
      <option value='series'>series</option>
    </select>
  );
}
