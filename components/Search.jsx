'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }

    router.push(`/?${params.toString()}`);
    router.refresh();
  };

  return (
    <label className='input'>
      <svg className='h-[1em] opacity-50' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <g strokeLinejoin='round' strokeLinecap='round' strokeWidth='2.5' fill='none' stroke='currentColor'>
          <circle cx='11' cy='11' r='8'></circle>
          <path d='m21 21-4.3-4.3'></path>
        </g>
      </svg>
      <form onSubmit={handleSubmit} className='w-full'>
        <input type='search' placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} />
      </form>
    </label>
  );
}
