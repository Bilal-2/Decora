import React from 'react';
import { heroVideo } from '../assets/media/index';

export default function Hero() {
  return (
    <div className='relative w-full h-screen'>
      <video autoPlay loop muted className='object-cover object-center w-full h-full'>
        <source src={heroVideo} type='video/mp4' />
      </video>
      <div className='absolute inset-0 flex items-center justify-center bg-transparent'>
        <div className='bg-black opacity-40 w-full h-full absolute z-10'></div>
        <h1 className='text-4xl font-bold text-white relative z-20 bg-transparent'>Try Then Buy</h1>
      </div>
    </div>
  );
}
