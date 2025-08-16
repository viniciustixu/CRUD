'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [limit, setLimit] = useState(searchParams.get('limit') || 20);

  const handleApplyChanges = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('limit', limit);
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
