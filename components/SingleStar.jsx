export default function StarRating({ rating }) {
  return (
    <svg
      fill='orange'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      stroke='orange'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='star'>
      <defs>
        <linearGradient id='half'>
          <stop offset='50%' stopColor='orange' />
          <stop offset='50%' stopColor='transparent' />
        </linearGradient>
      </defs>
      <polygon points='12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9' />
    </svg>
  );
}
