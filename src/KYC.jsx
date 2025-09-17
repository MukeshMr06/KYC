import React from "react";
import tick from "/tickimg.png";
import btnlogo from "/btnlogo.png";
import Navebar from "./Navebar";
import Profilepage from "./Profilepage";
import { ImKey } from "react-icons/im";
import { useNavigate } from "react-router-dom";


const KYC = () => {

  const navigate = useNavigate()

  return (
    <div className=" py-4">

      {/* profile page */}

      <div className="flex">
        <Profilepage />

        {/* upload */}

        <div className="w-full mx-4 flex flex-col gap-8 md:mx-10">
          <h2 className="font-bold text-2xl text-center md:text-5xl">Upload Your ID</h2>

          <div className="grid grid-cols-2 mt-3 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-3">
              <div className="relative border border-dashed border-[#4C8AFF] rounded-xl flex justify-center items-center bg-[#EBF5FF] w-40 h-40 md:w-90 md:h-68 md:bg-transparent">
                <div className="bg-[#0159FF] rounded-full flex items-center justify-center w-10 h-10 md:w-16 md:h-16">
                  <span className="text-white text-4xl md:text-4xl font-bold">+</span>
                </div>
              </div>

              <h1 className="font-bold text-xl md:text-3xl">Front side:</h1>
              <p className="text-[#606060] text-xs md:text-2xl md:w-90">
                Provide files in JPG or PDF format, maximum size 10 MB.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative border border-dashed border-[#4C8AFF] rounded-xl flex justify-center items-center bg-[#EBF5FF] w-40 h-40 md:w-90 md:h-68 md:bg-transparent">
                <div className="bg-[#0159FF] rounded-full flex items-center justify-center w-10 h-10 md:w-20 md:h-20">
                  <span className="text-white text-4xl md:text-7xl font-bold">+</span>
                </div>
              </div>

              <h1 className="font-bold text-xl md:text-3xl">Back side:</h1>
              <p className="text-[#606060] text-xs md:text-2xl md:w-90">
                Provide files in JPG or PDF format, maximum size 10 MB.
              </p>
            </div>

            <div className="flex flex-col gap-3  w-full md:w-auto col-span-2 md:col-span-1">
              <p className="font-medium md:text-2xl">
                The document provided must be valid and include the details
                listed below:{" "}
              </p>
              <h4 className="mx-6 md:mx-0 md:text-2xl">1). Clear Photo</h4>
              <h4 className="mx-6 md:mx-0 md:text-2xl">3). ID Number / Series</h4>
              <h4 className="mx-6 md:mx-0 md:text-2xl">4). Date of Birth</h4>
              <h4 className="mx-6 md:mx-0 md:text-2xl">2). Full Name</h4>
            </div>
          </div>

          <h2 className="text-center font-bold text-2xl md:text-5xl mt-10">
            Upload Your Bank Statement
          </h2>

          <div className="flex gap-2 items-center order-2">
            <img className="w-6 h-6 hidden md:block" src={tick} alt="" />
            <p className="font-medium text-sm md:text-3xl">
              Upload the valid Bank Statement with minimum of 3 months of
              transaction record.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="border border-dashed border-[#4C8AFF] bg-[#EBF5FF] gap-3 rounded-md flex flex-col justify-center items-center md:w-[600px] h-60 md:bg-transparent">
              <div className="relative border border-dashed border-[#4C8AFF] rounded-xl flex justify-center items-center bg-[#EBF5FF] w-40 h-40 md:w-90 md:h-68 md:bg-transparent">
                <div className="bg-[#0159FF] rounded-full flex items-center justify-center w-10 h-10 md:w-20 md:h-20">
                  <span className="text-white text-4xl md:text-7xl font-bold">+</span>
                </div>
              </div>

              <p className="text-[#606060] text-center hidden md:block md:text-xl">
                Provide files in JPG or PDF format, maximum size 10 MB.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center order-3 md:items-end mt-10">
            <button className="bg-[#0159FF] text-white px-2 py-2 rounded-xl cursor-pointer w-full md:w-68 " onClick={() => navigate('/pop')}>
              Next
            </button>
            <div className="flex gap-1 items-center ">
              <img className="w-4 h-4" src={btnlogo} alt="" />
              <p className="text-xs ">
                All data is encrypted for security purpose
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default KYC;
