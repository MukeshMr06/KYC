import React from "react";
import Profilepage from "./Profilepage";
import { useNavigate } from "react-router-dom";

const Support = () => {

  const navigate = useNavigate()

  return (
    <div className="flex">
      <Profilepage />

      <div className="w-full">
        <h3 className="text-center font-bold text-4xl mt-10 md:text-3xl">
          Kindly provide details
        </h3>

        <p className="bg-[#F4FAFF] mx-2 mt-6 px-6 py-7 rounded-md border border-[#4C8AFF] font-light md:text-2xl md:w-[1260px] md:mx-10 md:border-none">
          Please fill out the form, and our support team will review your
          request. We'll get back to you shortly. Submitting this form helps us
          resolve your concerns faster and ensures you receive the assistance
          you need.
        </p>

        <div className="mx-2 mt-7 md:mx-10">
          <h3 className="font-semibold text-2xl">Description</h3>
          <div className="border border-[#BFBFBF] h-[200px] p-3 rounded-md font-light mt-1 md:w-[450px] ">
            Kindly provide more information on your request.
          </div>
          <p className="text-right  mt-1 md:w-[440px]">0/5000</p>
        </div>

        <div className="flex flex-col gap-3 mx-2 mt-10 md:mx-10">
          <div className="border border-dashed border-[#4C8AFF] bg-[#EBF5FF]  h-48 rounded-md flex justify-center items-center md:w-[450px]">

            <div className="flex flex-col items-center gap-2 ">
              <div className="bg-[#0159FF] rounded-full w-20 h-20 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">+</span>
              </div>

              <p className="text-[#606060] text-center text-sm px-4 mt-4">
                Provide files in JPG or PDF format, maximum size 10 MB.
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col mx-10 mt-7 gap-4 mb-10  md:flex-row">
          <button className="bg-[#DBE8FF] font-semibold px-4 py-2  cursor-pointer rounded-md md:w-20" onClick={() => navigate("/setting")}>Back</button>
          <button className="bg-[#0159FF] text-white font-semibold  px-4 py-2 cursor-pointer rounded-md md:w-20">Submit</button>
        </div>

      </div>
    </div>
  );
};

export default Support;
