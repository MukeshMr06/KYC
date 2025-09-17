import React from "react";
import Profilepage from "./Profilepage";
import img1 from "./assets/images/helppage/Donate.svg";
import img2 from "./assets/images/helppage/employee.svg";
import img3 from "./assets/images/helppage/Search.svg";
import img4 from "./assets/images/helppage/trade.svg";
import img5 from "./assets/images/helppage/User.svg";
import img6 from "./assets/images/helppage/Withdrawal.svg";
import { useNavigate } from "react-router-dom";


const Setting = () => {

  const navigate = useNavigate()

  return (
    <div className="flex">
      <Profilepage />
      <div className="w-full mt-5">
        <h3 className="text-center font-bold text-3xl hidden md:block">Help Center</h3>
        <h3 className="mx-3 font-bold text-3xl md:hidden">Contact Us</h3>


        <div className="mx-3 mt-3 flex flex-col gap-5 md:mx-10 md:mt-10">
          <p className="font-light text-lg md:text-2xl">
            Kindly select the topic of your inquiry so we can assist you better.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

            <div className="w-full h-48 border border-[#BFBFBF] p-5 rounded-md md:p-3" onClick={()=> navigate('/support')} onClick={()=> navigate('/support')}>

              <div className="flex flex-col gap-2" >
                <img className="w-10 h-10" src={img1} alt="" />
                <h3 className="font-bold text-2xl ml-6 md:ml-0">Deposit</h3>
                <p className="text-sm ml-6 md:text-lg md:ml-0">
                  If your funds are not credited, delayed, or you face issues
                  while adding money to your account.
                </p>
              </div>
            </div>
            <div className="w-full h-48  border border-[#BFBFBF] p-5 rounded-md md:p-3" onClick={()=> navigate('/support')}>

              <div className="flex flex-col gap-2 ">
                <img className="w-10 h-10" src={img2} alt="" />
                <h3 className="font-bold text-2xl ml-6  md:ml-0">Withdrawal</h3>
                <p className="text-sm  ml-6  md:ml-0">
                  Handles withdrawal delays, declined requests, or pending fund transfer concerns.
                </p>
              </div>
            </div>

            <div className="w-full h-48  border border-[#BFBFBF] p-5 rounded-md md:p-3" onClick={()=> navigate('/support')}>

              <div className=" flex flex-col gap-2 ">
                <img className="w-10 h-10" src={img3} alt="" />
                <h3 className="font-bold text-2xl ">Introducing Broker</h3>
                <p className="text-sm ml-6 md:ml-0">
                  Any concern, query, or issue regarding IB you can raise request from here.
                </p>
              </div>
            </div>

            <div className="w-full h-48  border border-[#BFBFBF] p-5 rounded-md md:p-3" onClick={()=> navigate('/support')}>
              <div className=" flex flex-col gap-2 ">
                <img className="w-10 h-10" src={img4} alt="" />
                <h3 className="font-bold text-2xl ml-6 md:ml-0">Trades</h3>
                <p className="text-sm ml-6 md:ml-0">
                  Includes trade execution errors, order placement and other concerns.
                </p>
              </div>

            </div>

            <div className="w-full h-48  border border-[#BFBFBF] p-5 rounded-md md:p-3" onClick={()=> navigate('/support')}>
              <div className=" flex flex-col gap-2 ">
              <img className="w-10 h-10" src={img5} alt="" />
                <h3 className="font-bold text-2xl ml-6 md:ml-0">KYC</h3>
                <p className="text-sm ml-6 md:ml-0">
                  For identity verification, document uploads, approval status, or rejection clarification.
                </p>
              </div>
            </div>

            <div className="w-full h-48  border border-[#BFBFBF] p-5 rounded-md md:p-3" onClick={()=> navigate('/support')}>
              <div className=" flex flex-col gap-2 ">
              <img className="w-10 h-10" src={img6} alt="" />
                <h3 className="font-bold text-2xl ml-6 md:ml-0">Others</h3>
                <p className="text-sm ml-6 md:ml-0">
                  Any concern, query, or issue that does not fall under the categories listed above.
                </p>
              </div>
            </div>

          </div>

          <button className="bg-[#DBE8FF] px-4 py-2 w-full rounded-md cursor-pointer mb-6 md:w-30" onClick={() => navigate('/help')}>Back</button>


        </div>
      </div>
    </div>
  );
};

export default Setting;
