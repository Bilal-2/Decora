import React, { useState } from 'react';
import { styles } from '../UiStyle';




export default function Navbar() {

  const [toggle, setToggle] = useState(false)
  return (

    <nav className={`${styles.paddingX} flex flex-row gap-10 w-full items-center py-4  fixed top-0 z-20 bg-transparent`}>
      <div className='cursor-pointer bg-transparent' onClick={() => setToggle(!toggle)}>
        Shop
      </div>
      
      
      <div className='grid grow justify-items-center  bg-transparent w-10px'>
        <div className='cursor-pointer bg-transparent text-bold' >
          Decora
        </div>

      </div>
      <div className='cursor-pointer bg-transparent'>
        Bag
      </div>

    </nav>
  );
}
