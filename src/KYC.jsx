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

        <div className="w-full mx-10 flex flex-col gap-8 mt-4">
          <h2 className="font-bold text-2xl text-center">Upload Your ID</h2>

          <div className="flex justify-between gap-10">
            <div className="flex flex-col gap-3">
              <div className="relative border border-dashed border-[#4C8AFF] w-60 h-52 rounded-md flex justify-center items-center  ">
                <h2 className="text-xl text-white bg-[#0159FF] rounded-full w-10 h-10 p-10"></h2>
                <h2 className="text-7xl top-14 absolute text-white">+</h2>
              </div>
              <h1 className="font-bold text-xl">Front side:</h1>
              <p className="text-[#606060]">
                Provide files in JPG or PDF format, maximum size 10 MB.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative border border-dashed border-[#4C8AFF] w-60 h-52 rounded-md flex justify-center items-center  ">
                <h2 className="text-xl text-white bg-[#0159FF] rounded-full w-10 h-10 p-10"></h2>
                <h2 className="text-7xl top-14 absolute text-white">+</h2>
              </div>
              <h1 className="font-bold text-xl">Back side:</h1>
              <p className="text-[#606060]">
                Provide files in JPG or PDF format, maximum size 10 MB.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p>
                The document provided must be valid and include the details
                listed below:{" "}
              </p>
              <h4>1). Clear Photo</h4>
              <h4>2). Full Name</h4>
              <h4>3). ID Number / Series</h4>
              <h4>4). Date of Birth</h4>
            </div>
          </div>

          <h2 className="text-center font-bold text-2xl">
            Upload Your Bank Statement
          </h2>

          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src={tick} alt="" />
            <p className="font-medium text-xl">
              Upload the valid Bank Statement with minimum of 3 months of
              transaction record.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="border border-dashed border-[#4C8AFF] gap-3 w-[600px] h-48 rounded-md flex flex-col justify-center items-center">
              <h2 className="text-xl text-white bg-[#0159FF] rounded-full w-10 h-10 p-10"></h2>
              <h2 className="text-7xl top-[650px] absolute text-white">+</h2>
              <p className="text-[#606060] text-center">
                Provide files in JPG or PDF format, maximum size 10 MB.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-end">
            <button className="bg-[#0159FF] text-white w-68 px-2 py-2 rounded-sm cursor-pointer" onClick={()=> navigate('/pop')}>
              Next
            </button>
            <div className="flex gap-1 items-center">
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
