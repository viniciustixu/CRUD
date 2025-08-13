'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  function handleClick() {
    router.push('/');
  }

  return (
    <button onClick={handleClick} className='btn btn-neutral btn-outline'>
      Home
    </button>
  );
}
