export default function LanguageInput({ languages, setLanguages }) {
  const handleChange = (index, value) => {
    const newLanguages = [...languages];
    newLanguages[index] = value;
    setLanguages(newLanguages);
  };

  const handleRemoveLanguage = () => {
    const newLanguages = languages.slice(0, -1);
    setLanguages(newLanguages);
  };

  const handleAddLanguage = () => {
    setLanguages([...languages, '']);
  };

  return (
    <div className='flex  gap-2'>
      <div className='flex flex-col gap-2'>
        {languages.map((language, index) => (
          <div key={index} className='flex'>
            <input
              type='text'
              required
              className='input'
              placeholder='Language'
              value={language}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-2 items-end'>
        <button type='button' onClick={handleAddLanguage} className='btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' width='16' height='16' fill='currentColor'>
            <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
          </svg>
        </button>
        {languages.length > 1 && (
          <button type='button' onClick={handleRemoveLanguage} className='btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 480 480'
              width='16'
              height='16'
              fill='red'
              className='rotate-45'>
              <path d='M480 210H270V0h-60v210H0v60h210v210h60V270h210v-60z' />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
