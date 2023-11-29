import React from 'react'

function Contact() {
  return (
    <div>
      <h1 className=' text-3xl text-center'>Contact Us</h1>
      <div className='border-4 border-indigo-600 rounded-xl p-10 mr-40 ml-40 mt-20'>
        <div className=' min-h-fit min-w-full'>
          <label className=' w-20'>Name:</label>
          <input type="text" className='border-indigo-700 border-2 p-1' />
        </div>
        <div className=' min-h-fit min-w-full'>
          <label className='w-20'>Email:</label>
          <input type="text" className='border-indigo-700 border-2 p-1' />
        </div>
        <div className=' min-h-fit min-w-full'>
          <label className='w-20'>Phone Number:</label>
          <input type="text" className='border-indigo-700 border-2 p-1' />
        </div>
      </div>
    </div>
  )
}

export default Contact