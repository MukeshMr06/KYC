import React from "react";
import Profilepage from "./Profilepage";
import img1 from "/img1.svg";
import img2 from "/img2.svg";
import img3 from "/img3.svg";
import { FiInfo } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Help = () => {

    const navigate = useNavigate()

  return (
    <div className="flex">
      <Profilepage />

      <div className="w-full  flex flex-col gap-8 mt-4 mx-2 md:mx-10">
        <h3 className="font-bold text-3xl text-center hidden md:block md:text-4xl">Help Center</h3>

        <div className="bg-[#F3F5F7] flex flex-col gap-2 px-6 py-4 rounded-sm md:bg-[#F3F5F7]">
          <h3 className="font-bold text-3xl ">
            Hello, Praveen. How can we assist you today?
          </h3>
          <p className="font-light text-sm md:text-2xl">
            Your one-stop solution for all support needs. Find answers,
            troubleshoot issues, and explore the support options we offer you.
          </p>
        </div>

        <h2 className="font-bold text-3xl">Contact Us</h2>

        <div className="flex justify-between flex-wrap gap-6 mx-10">
          <div className="flex flex-col bg-[#F0FEF2] w-full min-h-[250px] rounded-sm md:w-96">
            <img
              className="w-full h-40 object-cover md:w-96"
              src={img1}
              alt="Need Help"
            />
            <div className="flex flex-col justify-between flex-1 mx-2 gap-2 py-2">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold md:text-2xl">Need Help?</h3>
                <p className="">Fill out the form, and our team will respond shortly.</p>
              </div>
              <button className="bg-[#0159FF] text-white p-2 mt-5 rounded w-40 cursor-pointer" onClick={()=> navigate('/setting')}>
                + Open a ticket
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-[#F0FEF2] w-full min-h-[350px] rounded-sm md:w-96">
            <img
              className="w-full h-40 object-cover md:w-96"
              src={img2}
              alt="Live Chat"
            />
            <div className="flex flex-col justify-between flex-1 mx-2 gap-2 py-2">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold md:text-2xl">Live Chat!</h3>
                <p className="font-light">
                  Didn't find what you were looking for? Connect instantly with
                  our Live Assistant.
                </p>
              </div>
              <button className="bg-[#96DFFF] font-bold p-2 mt-auto rounded w-30">
                Start Chat
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-[#F0FEF2] w-full min-h-[350px] rounded-sm md:w-96">
            <img
              className="w-full h-40 object-cover md:w-96"
              src={img3}
              alt="Contact Info"
            />
            <div className="flex flex-col justify-between flex-1 mx-2 gap-2 py-2">
              <div>
                <h3 className="font-bold md:text-2xl">Still Have Questions?</h3>
                <p>
                  Reach out to our support team directly at:
                  <br />
                  📞 +44 7488 848671 (WhatsApp Number)
                  <br />
                  📧 contact@rifafx.com (E-mail)
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-3xl">My Tickets</h2>

        <div className="border border-[#8E8E8E] rounded-sm mx-10 mb-8">
          <div className="flex justify-end mt-3">
            <div className="flex items-center border border-[#8E8E8E] rounded-sm w-60 px-2 mx-10 py-1 gap-2">
              <CiSearch size={30} />
              <input
                className="outline-none w-full items-end "
                type="text"
                placeholder="search"
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center h-[500px] gap-2">
            <FiInfo size={40} />
            <h3 className="font-bold text-sm md:text-3xl">There is no ticket history</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;