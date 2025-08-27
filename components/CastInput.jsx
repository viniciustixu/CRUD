import { useState } from 'react';

export default function CastInput({ cast, setCast }) {
  const handleChange = (index, value) => {
    const newActors = [...cast];
    newActors[index] = value;
    setCast(newActors);
  };

  const addActor = () => {
    setCast([...cast, '']);
  };

  const removeActor = (index) => {
    setCast(cast.filter((_, i) => i !== index));
  };

  return (
    <div className='flex flex-col gap-2'>
      {cast.map((actor, index) => (
        <div key={index} className='flex gap-2 items-center'>
          <input
            type='text'
            required
            value={actor}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Actor ${index + 1}`}
            className='input'
          />
          {cast.length > 1 && (
            <button type='button' onClick={() => removeActor(index)} className='btn'>
              X
            </button>
          )}
        </div>
      ))}

      <button type='button' onClick={addActor} className='btn'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' width='16' height='16' fill='currentColor'>
          <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
        </svg>
      </button>
    </div>
  );
}
