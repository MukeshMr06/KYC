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
      
            <div className="flex justify-between mx-6 z-50">
              <img className="w-32 h-20 object-contain cursor-pointer" src={logo} alt="Logo" onClick={()=> navigate('/')} />
      
              <div className="flex gap-10 -mt-7 items-center">
                <h2 className='cursor-pointer'>Dashboard</h2>
                <h2>Trading</h2>
                <h2>Orders</h2>
                <IoIosNotificationsOutline />
                <CgProfile />
              </div>
            </div>
            <div className="border border-[#C6E1FF] -mt-6"></div>
    </div>
  )
}

export default Navebar
