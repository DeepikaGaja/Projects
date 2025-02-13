import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-blue-50 flex flex-col p-10 mt-10'>
        <h2 className='font-Oswald text-black text-6xl'>Thank You for visiting!!!</h2>
        <ul className='flex mt-5 text-black text-lg gap-4 font-Poppins font-base'>
            <Link to="/"><li>Home</li></Link>
        </ul>
    </div>
  )
}

export default Footer