'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const limit = searchParams.get('limit') || 50;
  const year = searchParams.get('year') || 0;
  const genres = searchParams.get('genres') || '';
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const errorImg = 'https://cdn-icons-png.flaticon.com/512/13434/13434972.png';

  const fetchMovies = async () => {
    const res = await fetch(
      `/api/movies?page=${page}&limit=${limit}&year=${year}&genres=${genres}`,
    );
    const data = await res.json();
    setMovies(data.movies);
    setTotalPages(data.totalPages);
    if (page > data.totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', data.totalPages);
      router.push(`/?${params.toString()}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, limit, year, genres]);

  const handleNewPage = (p) => {
    const newPage = p;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage);
    router.push(`/?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className='flex flex-col items-center'>
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
      <div className='join my-4'>
        {page > 2 && (
          <button
            className='join-item btn p-6'
            onClick={() => handleNewPage(1)}>
            1
          </button>
        )}
        {page > 1 && (
          <button
            className='join-item btn p-6'
            onClick={() => handleNewPage(page - 1)}>
            {page - 1}
          </button>
        )}
        <button className='join-item btn btn-disabled p-6'>{page}</button>
        {page < totalPages && (
          <button
            className='join-item btn p-6'
            onClick={() => handleNewPage(page + 1)}>
            {page + 1}
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            className='join-item btn p-6'
            onClick={() => handleNewPage(totalPages)}>
            {totalPages}
          </button>
        )}
      </div>
    </div>
  );
}
