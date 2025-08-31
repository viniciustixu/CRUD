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
    <div className='flex  items-center  lg:justify-center '>
      <div className='flex-col items-center bg-[rgb(238,238,238)] mt-[80px] p-5 flex justify-around lg:flex-row xl:w-2/3 lg:items-start'>
        <div className='flex justify-center items-start max-w-[689px] '>
          <img
            src={movie.poster || errorImg}
            onError={(e) => (e.target.src = errorImg)}
            alt='movie poster'
            className='max-w-[70%] h-auto object-contain lg:align-top'
          />
        </div>
        <div className='w-1/2 flex flex-col items-center mt-5'>
          <h1 className='text-6xl font-bold'>{movie.title}</h1>
          <div className=' justify-end w-full flex mt-15 gap-1 items-center'>
            <div className='flex flex-col items-center'>
              <p className='font-extralight text-[0.8rem]'>{movie.imdb?.rating}</p>
              <p className='ml-2 text-[0.6rem]'>(votes: {movie.imdb?.votes})</p>
            </div>
            <StarRating rating={movie.imdb?.rating} className='justify-center' />
          </div>
          <p className='text-[1.2rem] mt-2'>{movie.fullplot || movie.plot || 'No plot available'}</p>

          <aside className='mt-10 flex gap-10 flex-wrap justify-around'>
            <div className='w-[250px] bg-[rgb(248,248,248)] p-5 rounded-2xl'>
              <h2 className='text-2xl font-bold text-center'>Cast:</h2>
              {movie.cast?.map((actor, i) => (
                <p key={i} className='text-center mt-2'>
                  {actor}
                </p>
              ))}
            </div>
            <div className='w-[250px] bg-[rgb(248,248,248)] p-5 rounded-2xl text-center'>
              <h2 className='text-2xl font-bold'>Awards: </h2>

              <p className='mt-2'>Wins: {movie?.awards?.wins || '0'}</p>
              <p className='mt-2'>Nominations: {movie?.awards?.nominations || '0'}</p>
              <p className='mt-2'>{movie?.awards?.text || 'no awards'}</p>
            </div>

            <div className='w-[90%] min-w-[430px] bg-[rgb(248,248,248)] p-5 rounded-2xl text-center flex flex-col'>
              <h2 className='text-2xl font-bold w-full'>Info: </h2>
              <div className='flex justify-around'>
                <div className='flex flex-col gap-2'>
                  <div>
                    <h2 className='font-bold'>Director:</h2>
                    {movie?.directors?.map((d, i) => <p key={i}>{d}</p>) || ' no director founded'}
                  </div>
                  <div>
                    <h2 className='font-bold'>Languages:</h2>

                    {movie?.languages?.map((l, i) => (
                      <p key={i}>{l}</p>
                    ))}
                  </div>
                  <div>
                    <h2 className='font-bold'> Released: </h2>
                    <p>
                      {movie?.released
                        ? new Date(movie.released).toLocaleDateString('en-US')
                        : 'no released date founded'}
                    </p>
                  </div>
                  <div>
                    <h2 className='font-bold'>Countries:</h2>
                    {movie?.countries?.map((c, i) => (
                      <p key={i}>{c}</p>
                    ))}
                  </div>
                  <div></div>
                </div>
                {/* -------------- */}
                <div className='flex flex-col gap-2'>
                  <div>
                    <h2 className='font-bold'>Genres:</h2>
                    {movie?.genres?.map((g) => (
                      <p>{g}</p>
                    ))}
                  </div>
                  <div>
                    <h2 className='font-bold'> Runtime: </h2>
                    <p>{movie?.runtime + ' minutes' || 'no runtime founded'}</p>
                  </div>
                  <div>
                    <h2 className='font-bold'> Rated: </h2>
                    <p>{movie?.rated || 'no rated founded'}</p>
                  </div>
                  <div>
                    <h2 className='font-bold'> Type: </h2>
                    <p>{movie?.type || 'no type founded'}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
