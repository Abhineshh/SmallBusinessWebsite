import React from 'react';
import li from "../assets/li.png";
import background from '../assets/background.jpg';
function Home() {


  return (
    <div className='pt-12'>
      <div className=' inline-block'>
        <img src={background} className=' w-full h-fit ' />
        <div className='absolute pt-2.5 pr-5 text-center text-white bg-transparent top-1/2 left-1'>
          <h1 className='text-6xl'>Flame Kaiser</h1>
          <p className=' text-base'>Your Globe-Trotting Companion</p>
        </div>
      </div>

      <div>
        <div className='flex flex-row justify-center border-2 border-indigo-600 rounded-xl m-10'>
          <img src={background} className='h-72 p-4 rounded-br-full' />
          <div className='flex flex-col justify-center'>
            <h1>Something goes here</h1>
            <p>Nicholos Copernicus published De Revolutionibus Orbium Coelestium
              (On the Revolutions of the Heavenly Spheres).
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-center border-2 border-indigo-600 rounded-xl m-10'>
          <div className='flex flex-col justify-center text-right'>
            <h1>Something goes here</h1>
            <p >Nicholos Copernicus published De Revolutionibus Orbium Coelestium
              (On the Revolutions of the Heavenly Spheres).
            </p>
          </div>
          <img src={background} className='h-72 p-4 rounded-bl-full rounded-lg' />
        </div>

        <div className='flex flex-row justify-center border-2 border-indigo-600 rounded-xl m-10'>
          <img src={background} className='h-72 p-4 rounded-br-full' />
          <div className='flex flex-col justify-center'>
            <h1>Something goes here</h1>
            <p>Nicholos Copernicus published De Revolutionibus Orbium Coelestium
              (On the Revolutions of the Heavenly Spheres).
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-center border-2 border-indigo-600 rounded-xl m-10'>
          <div className='flex flex-col justify-center text-right'>
            <h1>Something goes here</h1>
            <p>Nicholos Copernicus published De Revolutionibus Orbium Coelestium
              (On the Revolutions of the Heavenly Spheres).
            </p>
          </div>
          <img src={background} className=' h-72 p-4 rounded-bl-full rounded-lg' />
        </div>
      </div>
    </div>
  );
}

export default Home;