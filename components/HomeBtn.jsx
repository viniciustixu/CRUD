'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function HomeBtn() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleClick() {
    router.push('/');
  }

  return (
    <button onClick={handleClick} className='btn btn-neutral btn-outline'>
      Home
    </button>
  );
}
