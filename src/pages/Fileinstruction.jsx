import React from 'react'
import { Link } from 'react-router-dom';

function Fileinstruction() {
  return (
    <div className='w-full min-h-screen p-10 '>
        <h1 className='text-3xl tracking-tight border-b pb-2'>How to select files</h1>
        <div className=''>
            <ul className='text-xl mt-4 flex flex-col items-center sm:items-start gap-3'>
            <li className='font-bold'>1. Before uploading files see the instruction below that how to upload the file .</li>
            
                <li>2. Downloaded zip file</li>
                <img className='border rounded' sizes='w-xl' width={600} src='./downloadedfile.png' alt="" />
                <li>3. Choose followers_and_following folder.</li>
                <img  className='border rounded' width={600}  src="./followingfile.png" alt="" />
                <li>4. Select all the Files and open in next page</li>
                <img   className='border rounded' width={400}  src="./openfile.png" alt="" />
               <Link to={'/input/profileData'}><button className='px-4 py-2 border mt-4 rounded-lg text-xl hover:bg-slate-700 cursor-pointer'>Upload files</button></Link>
           
            </ul>
        </div>
    </div>
  )
}

export default Fileinstruction;