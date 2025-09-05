'use client';
import { Suspense, lazy } from 'react';
const HomePageLazy = lazy(() => import('@/components/HomePage'));


export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <HomePageLazy />
      </Suspense>
    </div>
  );
}
