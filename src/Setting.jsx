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
        <h3 className="text-center font-bold text-3xl">Help Center</h3>

        <div className="mx-10 mt-10 flex flex-col gap-5">
          <p className="font-light">
            Kindly select the topic of your inquiry so we can assist you better.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-4">

            <div className="w-72 flex flex-col gap-2 border border-[#BFBFBF] p-2 rounded-md">
              <img className="w-10 h-10" src={img1} alt="" />
              <h3 className="font-bold text-2xl">Deposit</h3>
              <p className="text-sm">
                If your funds are not credited, delayed, or you face issues
                while adding money to your account.
              </p>
            </div>
              <div className="w-72 flex flex-col gap-2 border border-[#BFBFBF] p-2 rounded-md">
              <img className="w-10 h-10" src={img2} alt="" />
              <h3 className="font-bold text-2xl">Withdrawal</h3>
              <p className="text-sm">
               Handles withdrawal delays, declined requests, or pending fund transfer concerns.
              </p>
            </div>

              <div className="w-72 flex flex-col gap-2 border border-[#BFBFBF] p-2 rounded-md">
              <img className="w-10 h-10" src={img3} alt="" />
              <h3 className="font-bold text-2xl">Introducing Broker</h3>
              <p className="text-sm">
              Any concern, query, or issue regarding IB you can raise request from here.
              </p>
            </div>

              <div className="w-72 flex flex-col gap-2 border border-[#BFBFBF] p-2 rounded-md">
              <img className="w-10 h-10" src={img4} alt="" />
              <h3 className="font-bold text-2xl">Trades</h3>
              <p className="text-sm">
               Includes trade execution errors, order placement and other concerns.
              </p>
            </div>

              <div className="w-72 flex flex-col gap-2 border border-[#BFBFBF] p-2 rounded-md">
              <img className="w-10 h-10" src={img5} alt="" />
              <h3 className="font-bold text-2xl">KYC</h3>
              <p className="text-sm">
        For identity verification, document uploads, approval status, or rejection clarification.
              </p>
            </div>

              <div className="w-72 flex flex-col gap-2 border border-[#BFBFBF] p-2 rounded-md">
              <img className="w-10 h-10" src={img6} alt="" />
              <h3 className="font-bold text-2xl">Others</h3>
              <p className="text-sm">
         Any concern, query, or issue that does not fall under the categories listed above.
              </p>
            </div>

          </div>

          <button className="bg-[#DBE8FF] px-4 py-2 w-30 rounded-md cursor-pointer mb-6" onClick={()=> navigate('/help')}>Back</button>


        </div>
      </div>
    </div>
  );
};

export default Setting;
