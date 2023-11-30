import React from 'react'
import background from '../assets/background.jpg';

function Product() {
  return (
    <div className='pt-14 pb-14'>
      <h1 className=' text-center text-4xl'>Our Products</h1>
    <div className='flex flex-wrap'>

      <div className='border-2 border-indigo-700 w-64 rounded-md p-4 mt-12 ml-12'>
        <img src={background} className=' h-40 rounded-md' />
        <div className='text-center'>
          <h2 className=' font-bold'>Product Title</h2>
          <p>to figure out which things to learn first. This book is my answer to that challenge. In the.</p>
        </div>
      </div>

      <div className='border-2 border-indigo-700 w-64 rounded-md p-4  mt-12 ml-12'>
        <img src={background} className=' h-40 rounded-md' />
        <div className='text-center'>
          <h2 className='text-center font-bold'>Product Title</h2>
          <p>to figure out which things to learn first. This book is my answer to that challenge. In the.</p>
        </div>
      </div>

      <div className='border-2 border-indigo-700 w-64 rounded-md p-4  mt-12 ml-12'>
        <img src={background} className=' h-40 rounded-md' />
        <div className='text-center'>
          <h2 className='text-center font-bold'>Product Title</h2>
          <p>to figure out which things to learn first. This book is my answer to that challenge. In the.</p>
        </div>
      </div>

      <div className='border-2 border-indigo-700 w-64 rounded-md p-4  mt-12 ml-12 '>
        <img src={background} className=' h-40 rounded-md' />
        <div className='text-center'>
          <h2 className='text-center font-bold'>Product Title</h2>
          <p>to figure out which things to learn first. This book is my answer to that challenge. In the.</p>
        </div>
      </div>
      </div>

   
    </div>
  )
}

export default Product