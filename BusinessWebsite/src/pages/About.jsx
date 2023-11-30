import React from 'react'
import background from '../assets/background.jpg';

function About() {
  return (
    <div className='pt-14'>
      <h1 className=' text-center text-4xl'>About Us</h1>
      <div className='p-12 flex flex-row'>
        <img src={background} className='h-60 rounded-md pr-14' />
        <p>In all my years as a trainer, consultant and Excel evangelist, I heard one question
          hundreds of times. "What do I learn?". Excel has hundreds of features, so it is daunting
          to figure out which things to learn first. This book is my answer to that challenge. In the
          next four chapters, I am going to list 10 formulas, 10 data analysis techniques, 10 charts
          and 10 tips to supercharge your Excel journey. Learn these and you will be well ahead
          of your peers. Each topic has extra resources at the end. Refer to them to learn more
          about the topics presented</p>
      </div>
      <div className='p-12 flex flex-row'>
        <p>
        In all my years as a trainer, consultant and Excel evangelist, I heard one question
          hundreds of times. "What do I learn?". Excel has hundreds of features, so it is daunting
          to figure out which things to learn first. This book is my answer to that challenge. In the
          next four chapters, I am going to list 10 formulas, 10 data analysis techniques, 10 charts
          and 10 tips to supercharge your Excel journey. Learn these and you will be well ahead
          of your peers. Each topic has extra resources at the end. Refer to them to learn more
          about the topics presented
        </p>
        <img src={background} className='h-60 rounded-md pl-14' />
      </div>
    </div>
  )
}

export default About