import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import btnlogo from "/btnlogo.png";
import Popup2 from "./Popup2";

const Popup = () => {
  const [step, setStep] = useState(1)
  const navigate = useNavigate("");

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-[400px] p-4 rounded-3xl flex flex-col gap-4 md:w-[600px]">
        <h3
          className="cursor-pointer text-2xl flex justify-end"
          onClick={() => navigate("/")}
        >
          X
        </h3>

        {step === 1 && (

          <>
            <div className="flex gap-2 justify-center">
              <div className="bg-blue-500 w-18 h-5"></div>
              <div className="bg-[#D9D9D9] w-18 h-5 " onClick={() => setStep(2)}></div>
              <div className="bg-[#D9D9D9] w-18 h-5"></div>
              <div className="bg-[#D9D9D9] w-18 h-5"></div>
              <div className="bg-[#D9D9D9] w-18 h-5"></div>
            </div>


            <p className="font-semibold text-4xl text-center mt-6">
              What is your <br />
              Employment Status?
            </p>

            <div className="flex justify-center mt-3">
              <div className="border border-[#595959] w-80 rounded-md flex flex-col divide-y divide-[#595959]">
                <h2 className="p-2 font-semibold">Employed (Full-Time)</h2>
                <h2 className="p-2 font-semibold">Self-employed</h2>
                <h2 className="p-2 font-semibold">Employed (Part Time)</h2>
                <h2 className="p-2 font-semibold">Unemployed</h2>
                <h2 className="p-2 font-semibold">Marketing / PR</h2>
                <h2 className="p-2 font-semibold">Student</h2>
                <h2 className="p-2 font-semibold">Retired</h2>
              </div>
            </div>
          </>
        )}

        {
          step=== 2 &&(
            <>
            <Popup2 />
            </>
          )
        }

        <div className="flex items-center gap-2 justify-center">
          <img src={btnlogo} alt="" className="w-6 h-6" />
          <p className="text-sm">All data is encrypted for security purpose</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
