export default function RatedInput({ rated, setRated }) {
  const handleChange = (e) => {
    const newRate = e.target.value;
    setRated(newRate);
  };

  return (
    <select onChange={handleChange} value={rated} className='select'>
      <option value='G'>G</option>
      <option value='PG'>PG</option>
      <option value='PG-13'>PG-13</option>
      <option value='R'>R</option>
      <option value='NC-17'>NC-17</option>
    </select>
  );
}
