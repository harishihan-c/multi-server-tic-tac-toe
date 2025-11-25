import React from 'react'
import assets from '../assets/assets'

const NavBar = () => {
  return (
    <div className='flex justify-between px-20 py-5 items-center'>
        <img src={assets.logo} alt="" className='w-40 h-8'/>
        <div className='rounded-full w-12 h-12 flex justify-center items-center bg-amber-400'>
            <span className='text-xl'>H</span>
        </div>
    </div>
  )
}

export default NavBar