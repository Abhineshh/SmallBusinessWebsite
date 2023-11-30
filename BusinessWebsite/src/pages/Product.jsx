import React from 'react'
import background from '../assets/background.jpg';
import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpg';
import acc from '../assets/acc.webp';

function Product() {
  return (
    <div className='pt-14 pb-14 pl-6 pr-6'>
      <h1 className=' text-center text-4xl'>Our Products and Services</h1>
      <h3 className='text-center text-xl'>We built Custom Bicycles for each Customer individually with the finest craftmanship. </h3>
      <div className='flex flex-wrap'>

        <div className='border-2 border-indigo-700 w-72 rounded-md p-4 mt-12 ml-12'>
          <img src={a1} className=' h-40 rounded-md' />
          <div className='text-center'>
            <h2 className=' font-bold'>Globe Trotter</h2>
            <p> For all your GlobeTrotting Adventures and leisures. This Bike will customs built as per riders taste.</p>
          </div>
        </div>

        <div className='border-2 border-indigo-700 w-72 rounded-md p-4 mt-12 ml-12'>
          <img src={a2} className=' h-40 rounded-md' />
          <div className='text-center'>
            <h2 className=' font-bold'>Back Packer</h2>
            <p>This is the Default companion for your weekend itches and fun. It comes with a carry and water bottle holder</p>
          </div>
        </div>

        <div className='border-2 border-indigo-700 w-72 rounded-md p-4 mt-12 ml-12'>
          <img src={a3} className=' h-40 rounded-md' />
          <div className='text-center'>
            <h2 className=' font-bold'>Mountain Bike</h2>
            <p>To Carve the Forest with a line of adrenaline and conquer the trail. It fun and light weight.</p>
          </div>
        </div>

        <div className='border-2 border-indigo-700 w-72 rounded-md p-4 mt-12 ml-12'>
          <img src={acc} className=' h-40 rounded-md' />
          <div className='text-center'>
            <h2 className=' font-bold'>Accessory Add-Ons</h2>
            <p> We Provide Accessories that go on each of our bikes perfectly, from tyres to bolts and wires, everything in one place.</p>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Product