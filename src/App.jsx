import { useState } from 'react'
import Footer from './component/Footer'

function App() {
  const [color, setColor] = useState('white');

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap justify-center top-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full bg-red-600 text-white' onClick={() => setColor('#dc2626')}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full bg-green-600 text-white' onClick={() => setColor('#16a34a')}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full bg-violet-600 text-white' onClick={() => setColor('#7c3aed')}>Violet</button>
            <button className='outline-none px-4 py-1 rounded-full bg-yellow-600 text-white' onClick={() => setColor('#ca8a04')}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full bg-orange-600 text-white' onClick={() => setColor('#ea580c')}>orange</button>
            <button className='outline-none px-4 py-1 rounded-full bg-gray-600 text-white' onClick={() => setColor('#4b5563')}>Black</button>
            <button className='outline-none px-4 py-1 rounded-full bg-purple-300 text-white' onClick={() => setColor('#D8B4FE')}>Lavender</button>
            <button className='outline-none px-4 py-1 rounded-full bg-pink-600 text-white' onClick={() => setColor('#DB2777')}>Pink</button>
            <button className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white' onClick={() => setColor('#2563EB')}>Blue</button>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default App
