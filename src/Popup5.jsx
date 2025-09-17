import React from "react"
import btnlogo from '/btnlogo.png'
import { useNavigate } from "react-router-dom"


const Popup5 = () => {

    const navigate = useNavigate()

    return (
        <div className="bg-black/50 inset-0 fixed flex items-center justify-center">
            <div className="bg-white w-[600px] p-4 rounded-3xl flex flex-col gap-4">
                <h2 className="flex justify-end text-2xl cursor-pointer">X</h2>
                <div className="flex gap-2 justify-center">
                    <div className="bg-[#D9D9D9] w-18 h-5"></div>
                    <div className="bg-[#D9D9D9] w-18 h-5"></div>
                    <div className="bg-[#D9D9D9] w-18 h-5"></div>
                    <div className="bg-[#D9D9D9] w-18 h-5"></div>
                    <div className="bg-blue-500 w-18 h-5"></div>

                </div>
                <p className="font-semibold text-4xl text-center mt-6">Kindly select your source of <br /> income and wealth</p>

                <p className="text-sm text-gray-300 text-center">You can select multiple answers here</p>

                <div className="flex flex-col justify-center items-center mt-3">
                    <div className="border border-[#595959] w-80 rounded-md flex flex-col divide-y divide-[#595959]">
                        <div className="flex items-center gap-2 p-2">
                            <input type="checkbox" />
                            <p>Savings</p>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <input type="checkbox" />
                            <p>Employment / Business Proceeds</p>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <input type="checkbox" />
                            <p>Rent</p>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <input type="checkbox" />
                            <p>Borrowed Fund / Loan</p>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <input type="checkbox" />
                            <p>Pension</p>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <input type="checkbox" />
                            <p>Inheritance</p>
                        </div>
                    </div>

                    <div className=" mt-2 border flex justify-end gap-3">
                        <button className=" w-20 p-1" onClick={()=> navigate('/popfour')}>Back</button>
                        <button className=" w-20 p-1 bg-blue-500 text-white" onClick={()=> navigate('/help')}>Submit</button>
                    </div>

                </div>

                <div className="flex items-center gap-2 justify-center mt-10 mb-2">
                    <img src={btnlogo} alt="" className="w-6 h-6" />
                    <p className="text-sm">All data is encrypted for security purpose</p>
                </div>

            </div>

        </div>
    )
}

export default Popup5