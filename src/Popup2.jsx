import React from "react"
import { useNavigate } from "react-router-dom"
import btnlogo from '/btnlogo.png'

const Popup2 = () => {

    const navigate = useNavigate()

    return (
        <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
            <div className="bg-white w-[600px] p-4 rounded-3xl flex flex-col gap-4">
                <h3
                    className="cursor-pointer text-2xl flex justify-end "
                    onClick={() => navigate("/")}
                >
                    X
                </h3>
                <div className="flex gap-2 justify-center">
                    <div className="bg-[#D9D9D9] w-18 h-5 "></div>
                    <div className="bg-blue-500 w-18 h-5 "></div>
                    <div className="bg-[#D9D9D9] w-18 h-5 " onClick={()=> navigate("/popthird")}></div>
                    <div className="bg-[#D9D9D9] w-18 h-5 "></div>
                    <div className="bg-[#D9D9D9] w-18 h-5 "></div>
                </div>
                <p className="font-semibold text-4xl text-center mt-6">

                    What is your occupation/ <br />
                    industry?
                </p>

                <div className="flex justify-center mt-3">
                    <div className="border border-[#595959] w-80 rounded-md flex flex-col divide-y divide-[#595959]">
                        <h2 className="p-2 font-semibold">EAccountancy</h2>
                        <h2 className="p-2 font-semibold">Admin / Secretariald</h2>
                        <h2 className="p-2 font-semibold">Agriculture</h2>
                        <h2 className="p-2 font-semibold">Catering / Hospitality</h2>
                        <h2 className="p-2 font-semibold">Marketing / PR</h2>
                        <h2 className="p-2 font-semibold">Education</h2>
                        <h2 className="p-2 font-semibold">Financial Services</h2>
                        <h2 className="p-2 font-semibold">Healthcare</h2>
                        <h2 className="p-2 font-semibold">HR</h2>
                        <h2 className="p-2 font-semibold">IT</h2>
                        <h2 className="p-2 font-semibold">Others</h2>
                    </div>
                </div>

                <div className="flex items-center gap-2 justify-center">
                    <img src={btnlogo} alt="" className="w-6 h-6" />
                    <p className="text-sm">All data is encrypted for security purpose</p>
                </div>

            </div>
        </div>
    )

}

export default Popup2