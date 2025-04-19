import React from 'react'
import { Link } from "react-router";
import { MoveRight } from 'lucide-react';
function App() {

  return (
    <>
  <div className='w-full h-screen gap-4 flex flex-col items-center justify-center'>
   <h1 className='text-3xl font-semibold font-serif'>Instagram Data viewer</h1>
   <div>
    <h1 className='text-xl border-b tracking-tighter mb-2'>
    Instructions to download data file from instagram :
    </h1>
    <ul>
      <li>1. Go to instagram setting</li>
      <li>2. Open account center</li>
      <li>3. Go to 'your information and permissions</li>
      <li>4. Download your information</li>
      <li>5. Select your account</li>
      <li>6. Select option " some of your information "</li>
      <li>7. In Connections select all </li>
      <span className='text-lg font-semibold flex items-center gap-2 mt-2'>Most important<MoveRight size={28}/></span>
      <li>8. Change the format of the file from HTML to JSON format</li>
      <li>9. At last download the file.</li>
      
      </ul>
   </div>
   <div>
    <h1 className='text-lg mt-4 font-semibold'>After getting the file you are good to go to :-</h1>
   </div>
    <div>
    <Link to={'/instruction'}>
      <button className='border bg-green-400 text-black cursor-pointer px-6 py-3 rounded-xl font-bold'>
        See folders managment 
      </button>
      </Link>
    </div>
  </div>
    </>
  )
}

export default App