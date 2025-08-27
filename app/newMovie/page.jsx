'use client';
import { useState } from 'react';
import CastInput from '@/components/CastInput';

export default function addMovie() {
  const [title, setTitle] = useState('Title');
  const [plot, setPlot] = useState('no plot');
  const [fullplot, setFullplot] = useState('no fullplot');
  const [poster, setPoster] = useState('no poster');
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const [cast, setCast] = useState(['no actors']);

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
    </form>
  );
}
/* Continuar daqui, falta formulário awards e info */
