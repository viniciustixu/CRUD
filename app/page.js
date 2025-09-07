import HomePage from '@/components/HomePage';
import { Suspense } from 'react';
import SkeletonHome from '@/components/SkeletonHome';



export default function Home() {
  return (
    <div>
      <Suspense fallback={<SkeletonHome />}>
        <HomePage />
      </Suspense>
    </div>
  );
}
