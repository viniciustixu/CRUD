'use client';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(50);

  const errorImg = 'https://cdn-icons-png.flaticon.com/512/13434/13434972.png';

  const fetchMovies = async (page) => {
    const res = await fetch(`/api/movies?page=${page}&limit=${limit}`);
    const data = await res.json();
    setMovies(data.movies);
    setTotalPages(data.totalPages);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

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
        {currentPage > 2 && (
          <button
            className='join-item btn p-6'
            onClick={() => setCurrentPage(1)}>
            1
          </button>
        )}
        {currentPage > 1 && (
          <button
            className='join-item btn p-6'
            onClick={() => setCurrentPage(currentPage - 1)}>
            {currentPage - 1}
          </button>
        )}
        <button className='join-item btn btn-disabled p-6'>
          {currentPage}
        </button>
        {currentPage < totalPages && (
          <button
            className='join-item btn p-6'
            onClick={() => setCurrentPage(currentPage + 1)}>
            {currentPage + 1}
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            className='join-item btn p-6'
            onClick={() => setCurrentPage(totalPages)}>
            {totalPages}
          </button>
        )}
      </div>
    </div>
  );
}
