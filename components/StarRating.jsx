export default function StarRating({ rating }) {
  const starCount = 5;
  const res = Math.floor(rating * 2);
  const value = res / 2 / 2;

  const stars = Array.from({ length: starCount }, (_, i) => {
    const starNumber = i + 1;
    let fill = 'none';

    if (value >= starNumber) {
      fill = 'orange'; // estrela cheia
    } else if (value >= starNumber - 0.5) {
      fill = 'url(#half)'; // meia estrela
    }

    return (
      <svg
        key={i}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill={fill}
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
  });

  return <div className='flex gap-1'>{stars}</div>;
}
