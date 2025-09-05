import HomePage from '@/components/HomePage';
import { Suspense } from 'react';


export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    </div>
  );
}
