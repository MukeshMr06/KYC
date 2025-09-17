import React from 'react'
import kyclogo from "/kyclogo.png";
import emp from "/empy.png";
import { BiSupport } from "react-icons/bi";
import { IoIosLogOut} from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const Profilepage = () => {

    const navigate = useNavigate()

  return (
    <div className='hidden md:flex'>
      <div className="flex flex-col gap-4 mx-5  ">
          <div className="flex gap-2 items-center">
            <FaUser />
            <h3 className="text-2xl font-medium">Profile</h3>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src={emp} alt="" />
            <h3 className="text-2xl font-medium">Earn With Us</h3>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src={kyclogo} alt="" />
            <h3 className="text-[#0159FF] text-2xl font-medium">KYC</h3>
          </div>
          <div className="flex gap-2 items-center">
            <BiSupport />
            <h3 className="text-2xl font-medium hover:cursor-pointer" onClick={()=> navigate('/support')}>Support</h3>
          </div>
          <div className="flex gap-2 items-center">
            <FaUser />
            <h3 className="text-2xl font-medium">Change Password</h3>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosLogOut />
            <h3 className="text-2xl font-medium">Logout</h3>
          </div>

          <div className="border border-black w-60 gap-2 flex items-center bg-[#F0FEF2] mx-1 p-1 mt-4">
            <HiMiniUsers />
            <p className="font-medium">
              Invite your friends and earn more money
            </p>
          </div>
        </div>

        <div className="border-r border-[#BFBFBF] h-auto min-h-screen "></div>
    </div>
  )
}

export default Profilepage
