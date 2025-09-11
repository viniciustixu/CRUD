'use client';
import Link from 'next/link';

export default function AddMovieBtn() {
  return (
    <Link href='/newMovie' className='relative group w-fit'>
      <button className='btn btn-neutral btn-outline flex items-center justify-center'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' width='16' height='16' fill='currentColor'>
          <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
        </svg>
      </button>

      <span className='absolute mt-2 top-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacitypointer-events-none whitespace-nowrap'>
        Add Movie
      </span>
    </Link>
  );
}
