import { useState } from 'react';
import axios from 'axios';

function Contact() {

  const [client, setTheData] = useState({
    email:'asdf@asdf.asdf',
    name:'asdasdf',
    phoneno:'asdfasdf',
    query:'asdfasdf asdf asdf asdf asdfasdf asdfas sfasdf',
  });

 

  async function sendData() {
    try{
      const urloftheserver = "http://localhost:3000/mailadmin/"
        const res = await axios.post(urloftheserver,client);
        console.log("The response was ",res.data);
       
    } catch(err){
      console.error('the message was not sent',err)
    }
  };

  return (
    <div className=' bg-slate-400 '>
      <h1 className=' text-4xl text-center pt-20 mb-16 font-bold text-indigo-700'>Contact Us</h1>
      <div className='flex justify-center'>

        <form className='border-4 border-indigo-600 bg-white rounded-xl pt-20 pb-12 pl-10 pr-10 w-3/6'>

          <div className=' mb-8'>
            <input 
            type="text" 
            name="email"
            autoComplete='email'
            className='border-indigo-700 border-2 p-1 w-full rounded hover:border-blue-400 active:border-red-400' 
            placeholder='Enter your Email ID'
            onChange={
              text => {
                client.email=text
                setTheData({...client})
              }
            }
           
             />
          </div>

          <div className=' mb-8'>
            <input 
            type="text" 
            name="name" 
            autoComplete='name'
            className='border-indigo-700 border-2 p-1 w-full  rounded hover:border-blue-400' 
            placeholder='Enter your Name' 
            onChange={
               tex => {
                client.name=tex
                setTheData({...client})
              }
            }
            />
          </div>

          <div className=' mb-8'>
            <input 
            type="text" 
            name="phno" 
            autoComplete='number'
            className='border-indigo-700 border-2 p-1 w-full rounded hover:border-blue-400' 
            placeholder='Enter your PhoneNumber' 
             onChange={tex => {
                client.phoneno=tex
                setTheData({...client})
              }
             }
            />
          </div>

          <div className='mb-8'>
            <textarea 
           name="query" 
            className='border-indigo-700 border-2 p-1 w-full rounded hover:border-blue-400' 
            placeholder='Enter your message'
             onChange={tex => {
                client.query=tex
                setTheData({...client})
              }
             }
             />
          </div>
          <div className='flex justify-center'>
            <button 
            className=' bg-indigo-700 rounded pt-3 pb-3 pl-10 pr-10 place-self-center hover:border-blue-400'  
            onClick={()=>{
              sendData();
            }}
            >Submit</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Contact;