"use client"
import React from "react";
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["latin"], weight: "400" });
const Contact = () => {
  return (
    <div>
      <div className="w-[60%] h-[680px]  ml-[370px] flex items-end">
        <img
          className=""
          src="http://okrender.com/wp-content/uploads/2023/10/07_Living-Rm-02_FStormCamera_022-scaled.jpg"
          alt=""
        />
      </div>
      <div className="w-[50%] h-[800px]  ml-[370px] mt-[100px] mb-[20px] flex flex-col justify-between">
        <div className="w-full h-[15%]  flex flex-col justify-between">
          <p className={`text-[44px] text-[#214b5e] ${prata.className}`}>
            Contact
          </p>
          <p className="text-gray-600 text-[18px]">
            Are you ready to partner with us? Send us an email to talk about
            your project
          </p>
        </div>
        <div className="w-full h-[80%]  flex justify-end">
          <form
            action="https://formsubmit.co/bahrom8466246@gmail.com"
            method="POST"
            className="w-[80%] h-full"
          >
            <div className="w-full h-[9%] flex flex-col justify-between mb-3">
              <p>Name*</p>
              <input
                type="text"
                name="Name"
                className="border-b-2 w-full h-[80%]"
                required
              />
            </div>
            <div className="w-full h-[9%] flex flex-col justify-between mb-3">
              <p>Email*</p>
              <input
                type="email"
                name="Email"
                className="border-b-2 w-full h-[80%]"
                required
              />
            </div>
            <div className="w-full h-[9%] flex flex-col justify-between mb-8">
              <p>Subject*</p>
              <select
                name="Continent"
                id=""
                className="border-b-2 w-full h-[80%]"
              >
                <option value="ALL">ALL</option>
                <option value="UZB">UZBEKISTAN</option>
                <option value="RUS">RUSSIA</option>
                <option value="USA">AMERICA</option>
                <option value="ANOTHER">ANOTHER</option>
              </select>
            </div>
            <div className="w-full h-[40%] flex flex-col justify-between mb-8">
              <p>Message</p>
              <textarea
                className="w-full h-[90%] border-2 p-5"
                name="Message"
                required
              ></textarea>
            </div>
            <div className="w-full h-[13%] ">
              <button
                type="submit"
                className="w-[18%] h-full bg-black text-white font-bold"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
