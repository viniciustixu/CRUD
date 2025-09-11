'use client';
import Link from 'next/link';

export default function HomeBtn() {
  return (
    <Link href='/'>
      <button className='btn btn-neutral btn-outline'>Home</button>
    </Link>
  );
}
