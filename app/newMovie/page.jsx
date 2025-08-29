'use client';
import { useState, useEffect } from 'react';
import CastInput from '@/components/CastInput';
import GenresInput from '@/components/GenresInput';
import LanguageInput from '@/components/LanguageInput';
import CountriesInput from '@/components/CountriesInput';
import RatedInput from '@/components/RatedInput';
import TypeInput from '@/components/TypeInput';
import DirectorsInput from '@/components/DirectorsInput';

export default function addMovie() {
  const [title, setTitle] = useState('Title');
  const [plot, setPlot] = useState('no plot');
  const [fullplot, setFullplot] = useState('no fullplot');
  const [poster, setPoster] = useState('no poster');
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const [cast, setCast] = useState(['no actors']);
  const [wins, setWins] = useState(0);
  const [nominations, setNominations] = useState(0);
  const [text, setText] = useState('0 wins & 0 nominations');
  const [directors, setDirectors] = useState(['no directors']);
  const [genres, setGenres] = useState(['Genres']);
  const [languages, setLanguages] = useState(['Languages']);
  const [released, setReleased] = useState(new Date().toLocaleDateString('en-CA'));
  const [countries, setCountries] = useState(['Countries']);
  const [runtime, setRuntime] = useState(0);
  const [rated, setRated] = useState('G');
  const [type, setType] = useState('movie');
  const [errorAlert, setErrorAlert] = useState('');

  const showErrorMsg = (msg) => {
    //Continuar daqui, checar se faltou alguma validação e ciar o POST
    setErrorAlert(msg);
    setTimeout(() => setErrorAlert(''), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title == 'Title') {
      showErrorMsg('Error, change title');
      return;
    }

    if (genres.includes('Genres') || genres < 1) {
      showErrorMsg('Error, select a genre');
      return;
    }

    if (languages.includes('Languages')) {
      showErrorMsg('Error, type a language');
      return;
    }

    if (countries.includes('Countries')) {
      showErrorMsg('Error, type a country');
    }

    if (runtime < 1) {
      showErrorMsg('Error, type a runtime');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-3xl mt-12'>Main</h1>
          <div className='flex items-center gap-2 '>
            <label>Title: </label>
            <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} className='input' />
          </div>
          <div className='flex items-center gap-2 '>
            <label>PosterUrl: </label>
            <input type='text' required value={poster} onChange={(e) => setPoster(e.target.value)} className='input' />
          </div>
          <div className='flex items-center gap-2'>
            <label>Plot: </label>
            <input type='text' required value={plot} onChange={(e) => setPlot(e.target.value)} className='input' />
          </div>
          <div className='flex items-center gap-2'>
            <label>fullPlot: </label>
            <input
              type='text'
              required
              value={fullplot}
              onChange={(e) => setFullplot(e.target.value)}
              className='input'
            />
          </div>
          <div className='flex items-center gap-2'>
            <label>Rating: </label>
            <input
              type='number'
              required
              value={rating}
              min={0}
              max={10}
              onChange={(e) => setRating(e.target.value)}
              className='input'
            />
          </div>
          <div className='flex items-center gap-2'>
            <label>Votes: </label>
            <input
              type='number'
              required
              value={votes}
              min={0}
              max={100000}
              onChange={(e) => setVotes(e.target.value)}
              className='input'
            />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-3xl mt-12'>Cast</h1>
          <CastInput cast={cast} setCast={setCast} />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-3xl mt-12'>Awards</h1>
          <div className='flex items-center gap-2'>
            <label>Nominations:</label>
            <input
              type='number'
              value={nominations}
              min={0}
              max={30}
              onChange={(e) => setNominations(e.target.value)}
              className='input'
            />
          </div>
          <div className='flex items-center gap-2'>
            <label>Wins:</label>
            <input
              type='number'
              value={wins}
              min={0}
              max={nominations}
              onChange={(e) => setWins(e.target.value)}
              className='input'
            />
          </div>
          <div className='flex items-center gap-2'>
            <label>Text:</label>
            <input type='text' required value={text} onChange={(e) => setText(e.target.value)} className='input' />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-3xl mt-12'>Info</h1>
          <div className='flex items-center gap-2'>
            <label>Directors: </label>
            <DirectorsInput directors={directors} setDirectors={setDirectors} />
          </div>
          <div className='flex items-center gap-2'>
            <GenresInput genres={genres} setGenres={setGenres} />
          </div>
          <div className='flex items-center gap-2'>
            <LanguageInput languages={languages} setLanguages={setLanguages} />
          </div>
          <div className='flex items-center gap-2'>
            <label>Released: </label>
            <input type='date' required value={released} onChange={(e) => setReleased(e.target.value)} />
          </div>
          <div className='flex items-center gap-2'>
            <CountriesInput countries={countries} setCountries={setCountries} />
          </div>
          <div className='flex items-center gap-2'>
            <label>Runtime: </label>
            <input
              type='number'
              min={0}
              required
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
              className='input'
            />
            <p>Minutes</p>
          </div>
          <div className='flex items-center gap-2'>
            <label>Rated: </label>
            <RatedInput rated={rated} setRated={setRated} />
          </div>
          <div className='flex items-center gap-2'>
            <label className='label'>Type: </label>
            <TypeInput type={type} setType={setType} />
          </div>
        </div>
        <button type='submit' className='btn'>
          Add Movie
        </button>
      </form>
      {errorAlert.length > 0 && (
        <div role='alert' className='alert alert-error fixed bottom-4 right-4 z-50 shadow-lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 shrink-0 stroke-current'
            fill='none'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>{errorAlert}</span>
        </div>
      )}
    </div>
  );
}
