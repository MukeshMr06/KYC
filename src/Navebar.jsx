import React from 'react'
import logo from "/logo.svg";
import { IoIosLogOut, IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Navebar = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* Navebar */}

      <div className="hidden md:block md:flex justify-between mx-6 z-50">
        <img className="w-32 h-20 object-contain cursor-pointer" src={logo} alt="Logo" onClick={() => navigate('/')} />

        <div className="flex gap-10 -mt-7 items-center">
          <h2 className='cursor-pointer text-xl font-medium' onClick={()=> navigate('/help')}>Dashboard</h2>
          <h2 className='text-xl font-medium'>Trading</h2>
          <h2 className='text-xl font-medium'>Orders</h2>
          <IoIosNotificationsOutline className='text-xl font-medium'/>
          <CgProfile className='text-xl font-medium'/>
        </div>
      </div>
      
      <div className='flex gap-6 my-4 mx-5 md:hidden'>
        <button className='font-bold text-xl cursor-pointer'>X</button>
        <h2 className='font-bold text-xl'>KYC</h2>
      </div>
        <div className='border border-[#C6E1FF] md:hidden'></div>



      <div className="border border-[#C6E1FF] -mt-6 hidden md:block"></div>
    </div>
  )
}

export default Navebar
