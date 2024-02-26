import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-gray-200 p-8 rounded-lg shadow-lg'>
        <h1 className='text-4xl mb-4'>Notification Count</h1>
        <div className='flex items-center'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <span className='mx-4 text-2xl'>{count}</span>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
