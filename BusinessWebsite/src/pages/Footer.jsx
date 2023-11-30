import React from 'react'
import fb from '../assets/fb.png';
import tt from '../assets/tt.png';
import gh from '../assets/gh.png';
import li from '../assets/li.png';
import yt from '../assets/yt.png';
import ig from '../assets/ig.png';

function Footer() {
  return (
    <div className='p-2 pb-0 flex flex-row justify-between bg-slate-400'>

      <div className='flex flex-col text- p-3 pb-0'>
        <span>flamekaiser@idaten.com</span>
        <span>+91-1234567890</span>
      </div>

      <div className='flex flex-row justify-between'>
        <a href="#" className='p-2 pb-0'> <img src={gh} className='h-7' /></a>
        <a href="#" className='p-2 pb-0'> <img src={fb} className='h-7' /></a>
        <a href="#" className='p-2 pb-0'> <img src={ig} className='h-7' /></a>
        <a href="#" className='p-2 pb-0'> <img src={tt} className='h-7' /></a>
        <a href="#" className='p-2 pb-0'><img src={yt} className='h-7' /></a>
        <a href="#" className='p-2 pb-0'><img src={li} className='h-7' /></a>
      </div>

      <div className=' text-indigo-700 text-4xl pb-0'>
        Flame Kaiser Customs
      </div>
      
        
     

    </div>
  );
}

export default Footer