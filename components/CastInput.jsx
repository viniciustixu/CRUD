export default function CastInput({ cast, setCast }) {
  const handleChange = (index, value) => {
    const newCast = [...cast];
    newCast[index] = value;
    setCast(newCast);
  };

  const handleRemoveCast = () => {
    const newCast = cast.slice(0, -1);
    setCast(newCast);
  };

  const handleAddCast = () => {
    setCast([...cast, '']);
  };

  return (
    <div className='flex  gap-2'>
      <div className='flex flex-col gap-2'>
        {cast.map((cast, index) => (
          <div key={index} className='flex'>
            <input
              type='text'
              required
              className='input'
              value={cast}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-2 items-end'>
        <button type='button' onClick={handleAddCast} className='btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' width='16' height='16' fill='currentColor'>
            <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
          </svg>
        </button>
        {cast.length > 1 && (
          <button type='button' onClick={handleRemoveCast} className='btn'>
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
