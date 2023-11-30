import React from 'react'
import background from '../assets/background.jpg';
import logo from '../assets/logo.jpg';
import loc from '../assets/loc.webp';

function About() {
  return (
    <div className='pt-14'>
      <h1 className=' text-center text-4xl'>About Us</h1>
      <div className='p-12 flex flex-row'>
        <img src={logo} className='h-60 rounded-md pr-14' />
        <p>At Flame Kaiser, we believe in the unparalleled joy and freedom that comes from riding a bicycle perfectly crafted to your unique needs and style. Nestled in the heart of Bengaluru, our small workshop is a sanctuary where passion for cycling meets craftsmanship.</p>
      </div>
      <div className='p-12 flex flex-row'>
        <p>
          Crafting Unique Stories on Two Wheels

          Every bicycle we create tells a story—a story of adventure, of personal expression, and of quality unmatched. We are more than builders; we're storytellers, weaving your aspirations into the very frame of each bike.

          Precision and Personalization

          From the initial design sketches to the final touches, our team of artisans meticulously handcrafts each bicycle with attention to detail and precision. We take pride in offering a personalized experience, ensuring that your dream bike becomes a tangible reality.
        </p>
        <img src={loc} className='h-60 rounded pl-14' />
      </div>
    </div>
  )
}

export default About