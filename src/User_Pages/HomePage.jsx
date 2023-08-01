import React from 'react'
import {
  Card,
  Navbar,
  Footer,
  Hero
} from '../Components/index'

export default function HomePage() {
  return (
    <div >

      <div className="realitive z-0 bg-primary">
        <Navbar />
        <Hero />
      </div>

      <div className='p-8 gap-8 lg:grid md:grid sm:grid xs:grid  grid-cols-5 h-96'>
        <div className='lg:col-span-3 md:col-span-3 sm:col-span-5 xs:col-span-5 xs:col-span-5 bg-tertiary  p-4  rounded-lg'>


        </div>
        <div className='lg:col-span-2 md:col-span-2 sm:col-span-5 xs:col-span-5 bg-tertiary p-4  rounded-lg'>

        </div>


      </div>

      <div className='p-8 gap-8 lg:grid md:grid sm:grid xs:grid  grid-cols-2 h-[28rem]'>
        <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 xs:col-span-2 xs:col-span-5 bg-tertiary  p-4  rounded-lg'>


        </div>
        <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 xs:col-span-2 bg-tertiary p-4  rounded-lg'>

        </div>


      </div>

      <div className='p-8 gap-8 lg:grid md:grid sm:grid xs:grid  grid-cols-5 h-96'>
        <div className='lg:col-span-3 md:col-span-3 sm:col-span-5 xs:col-span-5 xs:col-span-5 bg-tertiary  p-4  rounded-lg'>


        </div>
        <div className='lg:col-span-2 md:col-span-2 sm:col-span-5 xs:col-span-5 bg-tertiary p-4  rounded-lg'>

        </div>


      </div>

      <div className='p-8 gap-8 lg:grid md:grid sm:grid xs:grid  grid-cols-4 h-[32rem]'>
        <div className='lg:col-span-1 md:col-span-1 sm:col-span-4 xs:col-span-4 bg-primary p-4  rounded-lg'>

        </div>

        <div className='lg:col-span-2 md:col-span-2 sm:col-span-4 xs:col-span-4 xs:col-span-5 bg-secondary  p-4  rounded-lg'>


        </div>
        <div className='lg:col-span-1 md:col-span-1 sm:col-span-4 xs:col-span-4 bg-tertiary p-4  rounded-lg'>

        </div>


      </div>

      HomePage
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 p-8 '>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      
      <Footer />

    </div>
  )
}
