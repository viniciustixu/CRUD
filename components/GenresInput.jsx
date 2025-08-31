import { useState } from 'react';

export default function GenresInput({ genres, setGenres }) {
  const handleTest = (e) => {
    const removeDefaultItem = genres.filter((g) => g !== 'Genres');
    if (genres.includes(e.target.value)) {
    } else {
      const newGenres = [...removeDefaultItem, e.target.value];
      setGenres(newGenres);
    }
  };

  const handleRemoveItem = (e) => {
    e.preventDefault();
    const newGenres = genres.slice(0, -1);
    setGenres(newGenres);
  };

  return (
    <div className='flex gap-2 items-center'>
      <textarea
        readOnly
        className='textarea  textarea-info hover:cursor-not-allowed'
        placeholder='Genres'
        value={genres}></textarea>
      <select onChange={handleTest} className='select'>
        <option value='Action'>Action</option>
        <option value='Adventure'>Adventure</option>
        <option value='Animation'>Animation</option>
        <option value='Biography'>Biography</option>
        <option value='Comedy'>Comedy</option>
        <option value='Crime'>Crime</option>
        <option value='Documentary'>Documentary</option>
        <option value='Drama'>Drama</option>
        <option value='Family'>Family</option>
        <option value='Fantasy'>Fantasy</option>
        <option value='Film-Noir'>Film-Noir</option>
        <option value='History'>History</option>
        <option value='Horror'>Horror</option>
        <option value='Music'>Music</option>
        <option value='Musical'>Musical</option>
        <option value='Mystery'>Mystery</option>
        <option value='News'>News</option>
        <option value='Romance'>Romance</option>
        <option value='Sci-Fi'>Sci-Fi</option>
        <option value='Short'>Short</option>
        <option value='Sport'>Sport</option>
        <option value='Talk-Show'>Talk-Show</option>
        <option value='Thriller'>Thriller</option>
        <option value='War'>War</option>
        <option value='Western'>Western</option>
      </select>
      <button className='btn' onClick={handleRemoveItem}>
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
    </div>
  );
}
