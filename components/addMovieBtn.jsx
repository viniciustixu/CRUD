'use client';

import Link from 'next/link';

export default function AddMovieBtn() {
  return (
    <Link href='/newMovie'>
      <button className='btn btn-neutral btn-outline'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' width='16' height='16' fill='currentColor'>
          <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
        </svg>
      </button>
    </Link>
  );
}
