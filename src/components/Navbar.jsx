import React from 'react'
import { appleImg, bagImg, searchImg } from '../Utils'
import {navLists} from '../constants'

const Navbar = () => {
  return (
    
    <header className='w-full mt-10 py-10 sm:px-10 px-5 flex justify-center'>
  <nav className='flex w-full max-w-[1120px] items-center justify-between relative'>
    
    <img src={appleImg} alt="Apple" width={14} height={18} />

   
    <div className=' absolute left-1/2 transform -translate-x-1/2 flex gap-[3vw] max-sm:hidden'>
      {navLists.map((nav) => (
        <div
          key={nav}
          className='px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-all'
        >
          {nav}
        </div>
      ))}
    </div>

    {/* Right: Search & Bag */}
    <div className='flex items-baseline gap-7 max-sm:justify-end'>
      <img src={searchImg} alt="Search" width={18} height={18} />
      <img src={bagImg} alt="Bag" width={18} height={18} />
    </div>
  </nav>
</header>

  )
}

export default Navbar
