import { useRouter } from 'next/navigation';
import { ShowMsg } from './ShowMsg';

export default function RemoveBtn({ id, movie }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      document.getElementById('my_modal_2').close();
      await fetch(`http://localhost:3000/api/movies/${id}`, { method: 'DELETE' });
      ShowMsg('Sucessfully deleted', 'green');
      router.push('/');
    } catch (err) {
      ShowMsg(err.message || 'Error deleting', 'red');
    }
  };

  return (
    <div>
      <button className='btn' onClick={() => document.getElementById('my_modal_2').showModal()}>
        {' '}
        <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#EA3323'>
          <path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z' />
        </svg>
      </button>
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box text-center'>
          <h3 className='font-bold text-lg'>Delete {movie?.title}?</h3>
          <div className='flex gap-2 justify-center mt-5'>
            <button className='btn text-red-500 font-bold' onClick={handleDelete}>
              Yes
            </button>
            <button className='btn' onClick={() => document.getElementById('my_modal_2').close()}>
              No
            </button>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
