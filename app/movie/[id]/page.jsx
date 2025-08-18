'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function moviePage({ params }) {
  const { id } = useParams(params);
  const [movie, setMovie] = useState({});
  const errorImg = '/errorImg.png';

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`http://localhost:3000/api/movies/${id}`);
      const data = await res.json();
      setMovie(data.movie);
    };

    fetchMovie();
  }, [id]);

  return (
    <div className='flex justify-center'>
      <div className='w-8/12 bg-[rgb(238,238,238)] mt-[80px] p-5 flex justify-around'>
        <div className=''>
          <img
            src={movie.poster || errorImg}
            onError={(e) => (e.target.src = errorImg)}
            alt='movie poster'
            className='w-2/3'
          />
        </div>
        <div className='w-1/2 bg-amber-200'>
          <h1>{movie.title}</h1>
          <p>{movie.fullplot || movie.plot || 'No plot available'}</p>
        </div>
      </div>
    </div>
  );
}
