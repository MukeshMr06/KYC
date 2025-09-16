import React from "react";
import Profilepage from "./Profilepage";
import { useNavigate } from "react-router-dom";

const Support = () => {

    const navigate = useNavigate()

  return (
    <div className="flex">
      <Profilepage />

      <div className="w-full">
        <h3 className="text-center font-bold text-3xl mt-10">
          Kindly provide details
        </h3>

        <p className="bg-[#F4FAFF] w-[900px] mx-10 mt-6 px-6 py-7 rounded-md border border-[#F4FAFF] font-light ">
          Please fill out the form, and our support team will review your
          request. We'll get back to you shortly. Submitting this form helps us
          resolve your concerns faster and ensures you receive the assistance
          you need.
        </p>

        <div className="mx-10 mt-7 relative">
          <h3 className="font-semibold">Description</h3>
          <div className="border border-[#BFBFBF] w-[450px] h-[200px]   p-3 rounded-md">
            Kindly provide more information on your request.
          </div>
          <p className="absolute right-137">0/5000</p>
        </div>

        <div className="flex flex-col gap-3 mx-10 mt-10">
          <div className="border border-dashed border-[#4C8AFF] gap-3 w-[450px] h-48 rounded-md flex flex-col justify-center items-center">
            <h2 className="text-xl text-white bg-[#0159FF] rounded-full w-10 h-10 p-10"></h2>
            <h2 className="text-7xl top-[590px] absolute text-white">+</h2>
            <p className="text-[#606060] text-center">
              Provide files in JPG or PDF format, maximum size 10 MB.
            </p>
          </div>
        </div>

        <div className="flex mx-10 mt-5 gap-4 mb-10">
          <button className="bg-[#DBE8FF] font-semibold px-2 py-1 w-20 cursor-pointer" onClick={()=> navigate("/setting")}>Back</button>
          <button className="bg-[#0159FF] text-white font-semibold w-20 px-2 py-1 cursor-pointer">Submit</button>
        </div>

      </div>
    </div>
  );
};

export default Support;
