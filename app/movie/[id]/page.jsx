'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import StarRating from '@/components/StarRating';

export default function moviePage({ params }) {
  const { id } = useParams(params);
  const [movie, setMovie] = useState({});
  const errorImg = '/errorImg.png';

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`http://localhost:3000/api/movies/${id}`);
      const data = await res.json();
      setMovie(data.movie);
      console.log(data.movie);
    };

    fetchMovie();
  }, [id]);

  return (
    <div className='flex justify-center'>
      <div className='w-2/3 bg-[rgb(238,238,238)] mt-[80px] p-5 flex justify-around'>
        <div className=''>
          <img
            src={movie.poster || errorImg}
            onError={(e) => (e.target.src = errorImg)}
            alt='movie poster'
            className='w-2/3'
          />
        </div>
        <div className='w-1/2 flex flex-col items-center mt-5'>
          <h1 className='text-6xl font-bold'>{movie.title}</h1>
          <div className=' justify-end w-full flex mt-15 gap-1 items-center'>
            <div className='flex flex-col items-center'>
              <p className='font-extralight text-[0.8rem]'>
                {movie.imdb?.rating}
              </p>
              <p className='ml-2 text-[0.6rem]'>(votes: {movie.imdb?.votes})</p>
            </div>
            <StarRating
              rating={movie.imdb?.rating}
              className='justify-center'
            />
          </div>
          <p className='text-[1.2rem] mt-2'>
            {movie.fullplot || movie.plot || 'No plot available'}
          </p>
        </div>
      </div>
    </div>
  );
}
