'use client';
import { useState, useEffect } from 'react';
import CastInput from '@/components/CastInput';
import GenresInput from '@/components/GenresInput';
import LanguageInput from '@/components/LanguageInput';
import CountriesInput from '@/components/CountriesInput';
import RatedInput from '@/components/RatedInput';
import TypeInput from '@/components/TypeInput';
import DirectorsInput from '@/components/DirectorsInput';
import { sendError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { ShowMsg } from '@/components/ShowMsg';

export default function addMovie() {
  const router = useRouter();
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
  const [directors, setDirectors] = useState(['Directors']);
  const [genres, setGenres] = useState(['Genres']);
  const [languages, setLanguages] = useState(['Languages']);
  const [released, setReleased] = useState(new Date().toLocaleDateString('en-CA'));
  const [countries, setCountries] = useState(['Countries']);
  const [runtime, setRuntime] = useState(0);
  const [rated, setRated] = useState('G');
  const [type, setType] = useState('movie');
  const [year, setYear] = useState(2025);
  const newMovie = {
    title,
    plot,
    fullplot,
    poster,
    genres,
    cast,
    languages,
    released: new Date(released),
    directors,
    rated,
    year,
    runtime,
    countries,
    type,
    imdb: {
      rating,
      votes,
    },
    awards: {
      wins,
      nominations,
      text,
    },
    lastupdated: new Date().toISOString(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title == 'Title') {
      ShowMsg('Error, change title', 'red');
      return;
    }

    if (genres.includes('Genres') || genres.length < 1) {
      ShowMsg('Error, select a genre', 'red');
      return;
    }

    if (languages.includes('Languages')) {
      ShowMsg('Error, type a language', 'red');
      return;
    }

    if (countries.includes('Countries')) {
      ShowMsg('Error, type a country', 'red');
      return;
    }

    if (runtime < 1) {
      ShowMsg('Error, type a runtime', 'red');
      return;
    }

    try {
      const res = await fetch('/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMovie),
      });

      const data = await res.json();

      if (!res.ok) {
        ShowMsg(data.message || 'Error adding movie', 'red');
        return;
      }

      ShowMsg('Movie added successfully', 'green');
      setTimeout(() => {
        router.push(`/movie/${data._id}`);
      }, 2000);
    } catch (err) {
      ShowMsg(err.message || 'Network error', 'red');
    }
  };

  return (
    <div className='bg-[rgb(238,238,238)]  max-w-[800px] mx-auto my-15 rounded-2xl'>
      <form onSubmit={handleSubmit} className='pt-20 flex flex-col gap-8'>
        <div className='flex flex-col items-center max-w-[500px] mx-auto gap-2 bg-[rgb(248,248,248)] rounded-2xl p-5'>
          <h1 className='font-bold text-3xl mx-auto '>Main</h1>
          <div className='flex flex-col gap-2 '>
            <div className='flex items-center gap-2 '>
              <label>Title: </label>
              <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} className='input' />
            </div>
            <div className='flex items-center gap-2 '>
              <label>PosterUrl: </label>
              <input
                type='text'
                required
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
                className='input'
              />
            </div>
            <div className='flex items-center gap-2'>
              <label>Plot: </label>
              <input
                type='text'
                required
                value={plot}
                maxLength={200}
                onChange={(e) => setPlot(e.target.value)}
                className='input'
              />
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
                step='0.1'
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
                className='input '
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 bg-[rgb(248,248,248)] max-w-[500px] rounded-2xl mx-auto p-5'>
          <h1 className='font-bold text-3xl'>Cast</h1>
          <CastInput cast={cast} setCast={setCast} />
        </div>
        <div className='flex flex-col items-center gap-2 bg-[rgb(248,248,248)] max-w-[500px] rounded-2xl mx-auto p-5'>
          <h1 className='font-bold text-3xl'>Awards</h1>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <label>Nominations:</label>
              <input
                type='number'
                value={nominations}
                min={0}
                max={99}
                onChange={(e) => {
                  setNominations(e.target.value);
                  setText(`${wins} wins & ${e.target.value} nominations`);
                }}
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
                onChange={(e) => {
                  setWins(e.target.value);
                  setText(`${e.target.value} wins & ${nominations} nominations`);
                }}
                className='input'
              />
            </div>
            <div className='flex items-center gap-2'>
              <label>Text:</label>
              <input
                type='text'
                readOnly
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='input hover:cursor-not-allowed'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 bg-[rgb(248,248,248)] max-w-[500px] rounded-2xl mx-auto p-5'>
          <h1 className='font-bold text-3xl'>Info</h1>
          <div className='flex flex-col gap-2 items-center'>
            <div className='flex items-center gap-2'>
              <label>Rated: </label>
              <RatedInput rated={rated} setRated={setRated} />
            </div>
            <div className='flex items-center gap-2'>
              <label>Type: </label>
              <TypeInput type={type} setType={setType} />
            </div>
            <div className='flex items-center gap-2'>
              <label>Runtime: </label>
              <input
                type='number'
                min={0}
                required
                value={runtime}
                onChange={(e) => setRuntime(e.target.value)}
                className='input w-[70px]'
              />
              <p>Minutes</p>
            </div>
            <div className='flex items-center gap-2 p-1 rounded hover:bg-[rgb(238,238,238)]'>
              <DirectorsInput directors={directors} setDirectors={setDirectors} />
            </div>

            <div className='flex items-center gap-2 p-1 rounded hover:bg-[rgb(238,238,238)]'>
              <LanguageInput languages={languages} setLanguages={setLanguages} />
            </div>

            <div className='flex items-center gap-2 p-1 rounded hover:bg-[rgb(238,238,238)]'>
              <CountriesInput countries={countries} setCountries={setCountries} />
            </div>
            <div className='flex items-center gap-2'>
              <label>Released: </label>
              <input
                type='date'
                required
                value={released}
                onChange={(e) => {
                  setReleased(e.target.value);
                  setYear(e.target.value.slice(0, 4));
                }}
              />
            </div>
            <div className='flex items-center gap-2'>
              <GenresInput genres={genres} setGenres={setGenres} />
            </div>
          </div>
        </div>
        <div className='flex justify-center mb-8'>
          <button type='submit' className='btn btn-neutral btn-outline btn-xl'>
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
}
