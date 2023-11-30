import React from 'react'

function Contact() {

  function sendData(){
    alert('ding dong')
  }

  return (
    <div className=' bg-slate-400 '>
      <h1 className=' text-4xl text-center pt-20 mb-16 font-bold text-indigo-700'>Contact Us</h1>
      <div className='flex justify-center'>
      <form className='border-4 border-indigo-600 bg-white rounded-xl pt-20 pb-12 pl-10 pr-10 w-3/6'>

        <div className=' mb-8'>
          <input type="text" className='border-indigo-700 border-2 p-1 w-full rounded hover:border-blue-400 active:border-red-400' placeholder='Enter your Email ID' />
        </div>

        <div className=' mb-8'>
          <input type="text" className='border-indigo-700 border-2 p-1 w-full  rounded hover:border-blue-400' placeholder='Enter your Name' />
        </div>

        <div className=' mb-8'>
          <input type="text" className='border-indigo-700 border-2 p-1 w-full rounded hover:border-blue-400' placeholder='Enter your PhoneNumber' />
        </div>

        <div className='mb-8'>
          <textarea type='text' className='border-indigo-700 border-2 p-1 w-full rounded hover:border-blue-400' placeholder='Enter your message' />
        </div>
        <div className='flex justify-center'>
        <button className=' bg-indigo-700 rounded pt-3 pb-3 pl-10 pr-10 place-self-center hover:border-blue-400' onClick={sendData}>Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact