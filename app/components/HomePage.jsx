'use client';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const errorImg = 'https://cdn-icons-png.flaticon.com/512/13434/13434972.png';

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch('http://localhost:3000/api/movies');
      const data = await res.json();
      setMovies(data.movie);
    };

    fetchMovies();
  }, []);

  return (
    <div className='flex flex-wrap justify-center'>
      {movies.map((m, i) => (
        <div
          className='bg-[rgb(238,238,238)] w-[270px] m-5 p-2 flex flex-col justify-between'
          key={i}>
          <h1 className='text-3xl'>{m.title}</h1>
          <p className='text-xs'>{`"${m.plot || 'No plot'}"`}</p>
          <img
            src={m.poster || errorImg}
            onError={(e) => {
              e.target.src = errorImg;
            }}
            className='max-w-[250px]'
            alt={m.title}
          />
        </div>
      ))}
    </div>
  );
}
