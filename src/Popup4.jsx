import React, { useState } from "react"
import btnlogo from '/btnlogo.png'
import { useNavigate } from "react-router-dom"
import Popup5 from "./Popup5"


const Popup4 = () => {

    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    return (
        <div className=" z-50 inset-0 fixed flex items-center justify-center">
            <div className="bg-white w-[400px] p-4 rounded-3xl flex flex-col gap-4 md:w-[600px]">
                <h2 className="flex justify-end text-2xl cursor-pointer" onClick={() => navigate('/')}>X</h2>
            
                {step === 1 && (
                    <>
                        <div className="flex gap-2 justify-center">
                            <div className="bg-[#D9D9D9] w-18 h-5"></div>
                            <div className="bg-[#D9D9D9] w-18 h-5"></div>
                            <div className="bg-[#D9D9D9] w-18 h-5"></div>
                            <div className="bg-blue-500 w-18 h-5"></div>
                            <div className="bg-[#D9D9D9] w-18 h-5" onClick={() => setStep(2)}></div>
                        </div>
                        <p className="font-semibold text-4xl text-center mt-6">Kindly select your Annual <br /> income range?</p>

                        <div className="flex justify-center mt-3">
                            <div className="border border-[#595959] w-80 rounded-md flex flex-col divide-y divide-[#595959]">
                                <h3 className="font-semibold text-sm p-2">$100,000 - $200,000</h3>
                                <h3 className="font-semibold text-sm p-2">$50,000 - $100,000 </h3>
                                <h3 className="font-semibold text-sm p-2">$20,000 - $50,000</h3>
                                <h3 className="font-semibold text-sm p-2">More than $200,000</h3>
                                <h3 className="font-semibold text-sm p-2">$0 - $20,000</h3>
                            </div>
                        </div>

                    </>
                )}

                {
                    step === 2 &&(
                        <>
                        <Popup5 />
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

export default Popup4