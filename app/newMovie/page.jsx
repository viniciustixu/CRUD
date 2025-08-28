'use client';
import { useState } from 'react';
import CastInput from '@/components/CastInput';
import GenresInput from '@/components/GenresInput';
import LanguageInput from '@/components/LanguageInput';

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
  const [director, setDirector] = useState('no director');
  const [genres, setGenres] = useState(['Genres']);
  const [languages, setLanguages] = useState(['Languages']);

  return (
    <form action=''>
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
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} className='input' />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-3xl mt-12'>Info</h1>
        <div className='flex items-center gap-2'>
          <label>Director: </label>
          <input type='text' required value={director} onChange={(e) => setDirector(e.target.value)} />
        </div>
        <div className='flex items-center gap-2'>
          <GenresInput genres={genres} setGenres={setGenres} />
        </div>
        <div className='flex items-center gap-2'>
          <LanguageInput languages={languages} setLanguages={setLanguages} />
        </div>
      </div>
    </form>
  );
}
/* Continuar daqui, mudar seção de cast pra ficar igual a de languages */
