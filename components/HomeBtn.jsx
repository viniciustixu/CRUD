'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function HomeBtn() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleClick() {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');
    router.push(`/?${params.toString()}`);
  }

  return (
    <button onClick={handleClick} className='btn btn-neutral btn-outline'>
      Home
    </button>
  );
}
