'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [limit, setLimit] = useState(searchParams.get('limit') || 20);
  const [year, setYear] = useState(0);
  const [genres, setGenres] = useState([]);
  const genresList = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film-Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'News',
    'Romance',
    'Sci-Fi',
    'Short',
    'Sport',
    'Talk-Show',
    'Thriller',
    'War',
    'Western',
  ];

  const handleApplyChanges = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('limit', limit);
    params.set('year', year);
    params.set('genres', genres);
    router.push(`/?${params.toString()}`);
    router.refresh();
  };

  return (
    <div>
      <div className='drawer'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <label htmlFor='my-drawer' className='btn btn-neutral btn-outline'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-5 w-5 stroke-current'>
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'></path>{' '}
            </svg>
          </label>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'></label>
          <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
            <li>
              <div>
                <label className='label'>Limit per page: </label>
                <select
                  defaultValue={limit}
                  className='select'
                  onChange={(e) => setLimit(e.target.value)}>
                  <option disabled={true}>{limit}</option>
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='30'>30</option>
                  <option value='40'>40</option>
                  <option value='50'>50</option>
                  <option value='60'>60</option>
                  <option value='70'>70</option>
                  <option value='80'>80</option>
                  <option value='90'>90</option>
                  <option value='100'>100</option>
                  <option value='150'>150</option>
                </select>
              </div>
            </li>

            <li>
              <div className='flex justify-between'>
                <label className='label'>Year: </label>
                <select
                  defaultValue={year}
                  className='select max-w-[163.45px]'
                  onChange={(e) => setYear(e.target.value)}>
                  <option value='0' hidden={year == 0 ? true : false}>
                    any
                  </option>
                  <option value='1955'>1955</option>
                  <option value='1960'>1960</option>
                  <option value='1965'>1965</option>
                  <option value='1970'>1970</option>
                  <option value='1975'>1975</option>
                  <option value='1980'>1980</option>
                  <option value='1985'>1985</option>
                  <option value='1990'>1990</option>
                  <option value='1995'>1995</option>
                  <option value='2000'>2000</option>
                  <option value='2005'>2005</option>
                  <option value='2010'>2010</option>
                  <option value='2015'>2015</option>
                  <option value='2020'>2020</option>
                  <option value='2025'>2025</option>
                </select>
              </div>
            </li>
            <li>
              <div className='flex flex-wrap p-2 gap-4'>
                {genresList.map((genre, index) => (
                  <label
                    htmlFor={genre}
                    key={index}
                    className=' p-1 rounded flex gap-2'>
                    {genre}
                    <input
                      type='checkbox'
                      id={genre}
                      checked={genres.includes(genre)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setGenres([...genres, genre]);
                        } else {
                          setGenres(genres.filter((g) => g !== genre));
                        }
                      }}
                    />
                  </label>
                ))}
              </div>
            </li>

            <li>
              <button className='btn' onClick={handleApplyChanges}>
                Apply
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
