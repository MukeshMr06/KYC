import React, { useState } from "react"
import btnlogo from '/btnlogo.png'
import { useNavigate } from "react-router-dom"
import Popup4 from "./Popup4"


const Popup3 = () => {

    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    return (
        <div className=" inset-0 fixed flex items-center justify-center">
            <div className="bg-white w-[400px] p-4 rounded-3xl flex flex-col gap-4 md:w-[600px]">
                <h2 className="flex justify-end text-2xl cursor-pointer" onClick={() => navigate('/')}>X</h2>
                {step === 1 && (
                    <>
                        <div className="flex gap-2 justify-center">
                            <div className="bg-[#D9D9D9] w-18 h-5"></div>
                            <div className="bg-[#D9D9D9] w-18 h-5"></div>
                            <div className="bg-blue-500 w-18 h-5"></div>
                            <div className="bg-[#D9D9D9] w-18 h-5" onClick={() => setStep(2)}></div>
                            <div className="bg-[#D9D9D9] w-18 h-5"></div>
                        </div>
                        <p className="font-semibold text-4xl text-center mt-6">Do you have previous trading <br />experience?</p>

                        <div className="flex justify-center mt-3">
                            <div className="border border-[#595959] w-80 rounded-md flex flex-col divide-y divide-[#595959]">
                                <h3 className="font-semibold text-sm p-2">Yes, I have less than 1 year of trading experince</h3>
                                <h3 className="font-semibold text-sm p-2">Yes, I have 1+ years of trading experience</h3>
                                <h3 className="font-semibold text-sm p-2">Yes, I have 2+ years of trading experience</h3>
                                <h3 className="font-semibold text-sm p-2">Yes, I have 4+ years of trading experience</h3>
                                <h3 className="font-semibold text-sm p-2">No, I have no trading experince</h3>
                            </div>
                        </div>
                    </>
                )}
                {
                    step === 2 && (
                        <>
                            <Popup4 />
                        </>
                    )
                }

                <div className="flex items-center gap-2 justify-center mt-10 mb-2">
                    <img src={btnlogo} alt="" className="w-6 h-6" />
                    <p className="text-sm">All data is encrypted for security purpose</p>
                </div>

            </div>

        </div>
    )
}

export default Popup3