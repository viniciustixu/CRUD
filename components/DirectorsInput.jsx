export default function DirectorsInput({ directors, setDirectors }) {
  const handleChange = (index, value) => {
    const newDirectors = [...directors];
    newDirectors[index] = value;
    setDirectors(newDirectors);
    console.log(newDirectors);
  };

  const handleRemoveDirectors = () => {
    const newDirectors = directors.slice(0, -1);
    setDirectors(newDirectors);
  };

  const handleAddDirectors = () => {
    setDirectors([...directors, '']);
  };

  return (
    <div className='flex  gap-2'>
      <div className='flex flex-col gap-2'>
        {directors.map((director, index) => (
          <div key={index} className='flex'>
            <input
              type='text'
              required
              className='input'
              placeholder='Director'
              value={director}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-2 items-end'>
        <button type='button' onClick={handleAddDirectors} className='btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' width='16' height='16' fill='currentColor'>
            <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
          </svg>
        </button>
        {directors.length > 1 && (
          <button type='button' onClick={handleRemoveDirectors} className='btn'>
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
