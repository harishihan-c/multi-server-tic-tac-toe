import React from 'react'
import assets from '../assets/assets'

const Register = () => {
  return (
    <div className='flex flex-col'>
      <img src={assets.logo} alt="" className='w-40 h-8 mt-10 ml-20' />
      <div>
        <div className='w-100 h-115 bg-[#f0faf6] mx-auto mt-10 px-10 py-12 rounded-4xl'>
          <p className='font-medium text-xl text-center mb-10'>Create an Account</p>
          <input type='text' placeholder='Username' className='w-full bg-[#eaf3f0] py-3 px-6 rounded-full mb-6 text-sm outline-none'/>
          <input type='email' placeholder='Email' className='w-full bg-[#eaf3f0] py-3 px-6 rounded-full mb-6 text-sm outline-none'/>
          <input type='password' placeholder='Password' className='w-full bg-[#eaf3f0] py-3 px-6 rounded-full mb-10 text-sm outline-none'/>
          <button className='w-full bg-[#06AF6B] text-white py-3 text-center rounded-full'>Create Account</button>
          <p className='text-[12px] text-center mt-6'>Already have an Account? <span>login</span></p>
        </div>
      </div>
    </div>
  )
}

export default Register