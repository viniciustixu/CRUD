'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import SkeletonHome from './SkeletonHome';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const limit = searchParams.get('limit') || 50;
  const year = searchParams.get('year') || 0;
  const genres = searchParams.get('genres') || '';
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const search = searchParams.get('search') || '';
  const [loading, setLoading] = useState(false);

  const errorImg = '/errorImg.png';

  const fetchMovies = async () => {
    setLoading(true);
    const res = await fetch(
      `/api/movies?page=${page}&limit=${limit}&year=${year}&genres=${genres}&search=${encodeURIComponent(search)}`,
    );
    const data = await res.json();
    setLoading(false);
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
  }, [page, limit, year, genres, search]);

  const handleNewPage = (p) => {
    const newPage = p;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage);
    router.push(`/?${params.toString()}`);
    router.refresh();
  };

  if (loading) {
    return <SkeletonHome />;
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-wrap justify-center'>
        {movies.map((m, i) => (
          <Link
            href={`/movie/${m._id}`}
            key={i}
            className='bg-[rgb(238,238,238)] w-[270px] m-5 p-2 flex flex-col rounded-xl justify-between hover:bg-[rgb(228,228,228)] hover:cursor-pointer'>
            <h1 className='text-3xl'>{m.title}</h1>
            <p className='text-xs my-3'>{`"${m.plot || 'No plot'}"`}</p>
            <img
              src={m.poster || errorImg}
              onError={(e) => {
                e.target.src = errorImg;
              }}
              className='max-w-[250px]'
              alt={m.title}
            />
          </Link>
        ))}
      </div>
      <div className='join my-4'>
        {page > 2 && (
          <button className='join-item btn p-6' onClick={() => handleNewPage(1)}>
            1
          </button>
        )}
        {page > 1 && (
          <button className='join-item btn p-6' onClick={() => handleNewPage(page - 1)}>
            {page - 1}
          </button>
        )}
        <button className='join-item btn btn-disabled p-6'>{page}</button>
        {page < totalPages && (
          <button className='join-item btn p-6' onClick={() => handleNewPage(page + 1)}>
            {page + 1}
          </button>
        )}
        {page < totalPages - 1 && (
          <button className='join-item btn p-6' onClick={() => handleNewPage(totalPages)}>
            {totalPages}
          </button>
        )}
      </div>
    </div>
  );
}
