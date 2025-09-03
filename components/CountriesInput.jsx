export default function CountriesInput({ countries, setCountries }) {
  const handleChange = (index, value) => {
    const newCountry = [...countries];
    newCountry[index] = value;
    setCountries(newCountry);
  };

  const handleRemoveCountry = () => {
    const newCountry = countries.slice(0, -1);
    setCountries(newCountry);
  };

  const handleAddCountry = () => {
    setCountries([...countries, '']);
  };

  return (
    <div className='flex  gap-2'>
      <div className='flex flex-col gap-2'>
        {countries.map((country, index) => (
          <div key={index} className='flex'>
            <input
              type='text'
              required
              className='input'
              placeholder='Country'
              value={country}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-2 items-end'>
        <button type='button' onClick={handleAddCountry} className='btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' width='16' height='16' fill='currentColor'>
            <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
          </svg>
        </button>
        {countries.length > 1 && (
          <button type='button' onClick={handleRemoveCountry} className='btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 480 480'
              width='16'
              height='16'
              fill='red'
              className='rotate-45'>
              <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
