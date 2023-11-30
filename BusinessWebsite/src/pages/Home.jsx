import React from 'react';
import li from "../assets/li.png";
import background from '../assets/background.jpg';
import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.webp';
import acc from '../assets/acc.webp';

function Home() {


  return (
    <div className='pt-12'>

      <div className=' inline-block'>
        <img src={background} className=' w-full h-fit ' />
        <div className='absolute pt-2.5 pr-5 text-center text-black bg-transparent top-1/4 font-extrabold left-1 pl-5'>
          <h1 className='text-6xl'>Flame Kaiser</h1>
          <p className='text-3xl'>We built Custom Bicycles for each Customer individually with the finest craftmanship.</p>
        </div>
      </div>

      <div>
        <div className='flex flex-row justify-center border-2 border-indigo-600 rounded-xl m-10 bg-slate-400'>
          <img src={b1} className='h-72 p-4 rounded-3xl' />
          <div className='flex flex-col justify-center'>
            <h1 className='text-2xl text-indigo-800'>Mountain Biking</h1>
            <p>To Carve the Forest with a line of adrenaline and conquer the trail. It fun and light weight.
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-center border-2 border-indigo-600 rounded-xl m-10 bg-slate-400'>
          <div className='flex flex-col justify-center text-right'>
            <h1 className='text-2xl text-indigo-800'>Backpacking</h1>
            <p >This is the Default companion for your weekend itches and fun. It comes with a carry and water bottle holder.
            </p>
          </div>
          <img src={b2} className='h-72 p-4 rounded-3xl' />
        </div>

        <div className='flex flex-row justify-center border-2 border-indigo-600 rounded-xl m-10 bg-slate-400'>
          <img src={b3} className='h-72 p-4 rounded-3xl' />
          <div className='flex flex-col justify-center'>
            <h1 className='text-2xl text-indigo-800'>Touring</h1>
            <p>For all your GlobeTrotting Adventures and leisures. This Bike will customs built as per riders taste.
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-center border-2 border-indigo-600 rounded-xl m-10 bg-slate-400'>
          <div className='flex flex-col justify-center text-right'>
            <h1 className='text-2xl text-indigo-800'>Accessories</h1>
            <p>We Provide Accessories that go on each of our bikes perfectly, from tyres to bolts and wires, everything in one place.
            </p>
          </div>
          <img src={acc} className=' h-72 p-4 w-2/4 rounded-3xl' />
        </div>
      </div>
    </div>
  );
}

export default Home;