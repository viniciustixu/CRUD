'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import StarRating from '@/components/StarRating';
import CastInput from '@/components/CastInput';
import DirectorsInput from '@/components/DirectorsInput';
import GenresInput from '@/components/GenresInput';
import LanguageInput from '@/components/LanguageInput';

export default function EditMovie({ params }) {
  const { id } = useParams();
  const router = useRouter();
  const textareaRef = useRef(null);
  const errorImg = '/errorImg.png';
  const svgEditIcon =
    'M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z';

  const [movie, setMovie] = useState({});

  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const [fullPlot, setFullPlot] = useState('');
  const [plot, setPlot] = useState('');
  const [cast, setCast] = useState(['']);
  const [wins, setWins] = useState(0);
  const [nominations, setNominations] = useState(0);
  const [text, setText] = useState('');
  const [directors, setDirectors] = useState(['']);
  const [genres, setGenres] = useState(['']);
  const [languages, setLanguages] = useState(['']);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`http://localhost:3000/api/movies/${id}`);
      const data = await res.json();
      setMovie(data.movie);
      console.log(id);
      console.log(data.movie);
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [fullPlot]);

  useEffect(() => {
    if (movie.poster) {
      setPoster(movie.poster);
    }
    if (movie.title) {
      setTitle(movie.title);
    }
    if (movie.imdb) {
      setRating(movie.imdb.rating);
      setVotes(movie.imdb.votes);
    }
    if (movie.fullplot) {
      setFullPlot(movie.fullplot);
    }
    if (movie.plot) {
      setPlot(movie.plot);
    }
    if (movie.cast) {
      setCast(movie.cast);
    }
    if (movie.awards) {
      setWins(movie.awards.wins);
      setNominations(movie.awards.nominations);
      setText(movie.awards.text);
    }
    if (movie.directors) {
      setDirectors(movie.directors);
    }
    if (movie.genres) {
      setGenres(movie.genres);
    }
    if (movie.languages) {
      setLanguages(movie.languages);
    }
  }, [movie]);

  return (
    <div className='flex flex-col items-center lg:justify-center mb-5'>
      <div className=' xl:w-2/3 flex w-full justify-end mt-[60px] mb-3 gap-2'>
        <button className='btn' onClick={() => alert('ok')}>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
            <path d='m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
          </svg>
        </button>
        <button className='btn' onClick={() => router.push(`/movie/${id}`)}>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
            <path d='m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
          </svg>
        </button>
      </div>
      <div className='flex-col items-center bg-[rgb(238,238,238)]  p-5 flex justify-around lg:flex-row xl:w-2/3 lg:items-start'>
        <div className='flex flex-col gap-3 items-center justify-center  max-w-[689px] '>
          <label className='input'>
            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
              <path d={svgEditIcon} />
            </svg>
            <input type='text' className='grow' value={poster} onChange={(e) => setPoster(e.target.value)} />
          </label>
          <img
            src={poster || errorImg}
            onError={(e) => (e.target.src = errorImg)}
            alt='movie poster'
            className='max-w-[70%] h-auto object-contain lg:align-top'
          />
        </div>

        <div className='w-1/2 flex flex-col items-center mt-5'>
          <label className='input input-xl'>
            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
              <path d={svgEditIcon} />
            </svg>
            <input
              type='text'
              className='text-6xl font-bold'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <div className=' justify-end w-full flex mt-15 gap-1 items-center'>
            <div className='flex flex-col gap-2 items-end'>
              <div className='flex gap-2'>
                <p>Rating:</p>
                <label className='input input-xs w-30'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill='#000000'>
                    <path d={svgEditIcon} />
                  </svg>
                  <input
                    type='number'
                    step={0.1}
                    min={0}
                    max={10}
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </label>
              </div>

              <div className='flex gap-2'>
                <p>Votes:</p>
                <label className='input input-xs w-30'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill='#000000'>
                    <path d={svgEditIcon} />
                  </svg>
                  <input type='number' value={votes} onChange={(e) => setVotes(e.target.value)} />
                </label>
              </div>
            </div>
            <StarRating rating={rating} className='justify-center' />
          </div>

          <div className='w-full'>
            <h2 className='text-2xl font-bold'>Fullplot: </h2>
            <textarea
              ref={textareaRef}
              className='textarea w-full  text-[1.2rem] mt-2'
              onChange={(e) => {
                setFullPlot(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
              value={fullPlot || 'No plot available'}></textarea>
          </div>

          <div className='w-full'>
            <h2 className='text-2xl font-bold'>1 sentence plot: </h2>
            <label className='input w-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#000000'>
                <path d={svgEditIcon} />
              </svg>
              <input type='text' className='grow' value={plot} onChange={(e) => setPlot(e.target.value)} />
            </label>
          </div>

          <aside className='mt-10 flex gap-10 flex-wrap justify-around'>
            <div className='w-[250px] bg-[rgb(248,248,248)] p-5 rounded-2xl'>
              <h2 className='text-2xl font-bold text-center'>Cast:</h2>
              <CastInput cast={cast} setCast={setCast} />
            </div>
            <div className='w-[250px] bg-[rgb(248,248,248)] p-5 rounded-2xl text-center'>
              <h2 className='text-2xl font-bold'>Awards: </h2>

              <div className='flex gap-2 items-center mt-2'>
                <p>Wins:</p>
                <label className='input w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill='#000000'>
                    <path d={svgEditIcon} />
                  </svg>
                  <input
                    type='number'
                    min={0}
                    max={nominations}
                    value={wins}
                    onChange={(e) => {
                      setWins(e.target.value);
                      setText(`${e.target.value} wins & ${nominations} nominations`);
                    }}
                  />
                </label>
              </div>
              <div className='flex gap-2 items-center mt-2'>
                <p>Nominations:</p>
                <label className='input w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill='#000000'>
                    <path d={svgEditIcon} />
                  </svg>
                  <input
                    type='number'
                    min={0}
                    value={nominations || 0}
                    onChange={(e) => {
                      setNominations(e.target.value);
                      setText(`${wins} wins & ${e.target.value} nominations`);
                    }}
                  />
                </label>
              </div>

              <div className='mt-2'>
                <p>{text}</p>
              </div>
            </div>

            <div className='w-[90%] min-w-[430px] bg-[rgb(248,248,248)] p-5 rounded-2xl text-center flex flex-col'>
              <h2 className='text-2xl font-bold w-full'>Info: </h2>
              <div className='flex justify-around'>
                <div className='flex flex-col gap-2'>
                  <div>
                    <h2 className='font-bold'>Director:</h2>
                    <DirectorsInput directors={directors} setDirectors={setDirectors} />
                  </div>
                  <div>
                    <h2 className='font-bold'>Languages:</h2>

                    <LanguageInput languages={languages} setLanguages={setLanguages} />
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
                    <GenresInput genres={genres} setGenres={setGenres} />
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
