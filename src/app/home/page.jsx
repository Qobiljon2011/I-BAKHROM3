"use client";
import React, { useEffect, useState } from "react";
import Ok from "../../../public/Screenshot 2024-06-14 202958.png";
import "./Home.css";
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["latin"], weight: "400" });

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolled2, setScrolled2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        setScrolled2(true);
      } else {
        setScrolled2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[100%]">
      <header className="w-full h-[1200px] header"></header>
      <main>
        <div className="w-full h-[550px]  flex items-center justify-center">
          <div className="w-[50%] h-[80%] ">
            <div className="w-full h-[55%]  flex flex-col items-center justify-center">
              <img src={Ok.src} alt="" width={196} height={155} />
              <h1 className={`text-[#214B5E] text-[36px] mt-5 ${prata.className}`}>I-BAKHROM</h1>
            </div>
            <div className="w-full h-[45%] ">
              <p className="text-[24px] text-center">
                Visualization studio specializing in luxury and high-end project
                renderings for interior designers and property developers. We
                create stunning 3D rendering images for effective communication
                and marketing.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[1200px]  bg flex items-center justify-center ${
            scrolled2 ? "scrolled" : ""
          }`}
        >
          <div className="w-[20%] h-[20%] ">
            <div className="w-full h-[50%] ">
              <p className="text-center text-black font-semibold">
                An overview of some of our works for both
              </p>
              <p className="text-center text-black font-semibold">
                Residential and Commercial projects
              </p>
            </div>
            <div className="w-full h-[50%]  flex items-center justify-center">
              <button className=" w-[40%] h-[60%] text-black btn border-black border-2">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[350px]  flex items-center justify-center">
          <div className="w-[70%] h-[65%] shadow-2xl flex items-center justify-center">
            <div className="w-[90%] h-[70%]  flex justify-between">
              <div className="w-[40%] h-full  flex flex-col">
                <p className="text-[36px] text-[#214b5e] font-bold mt-2">
                  Our Newsletter
                </p>
                <p className="text-[16px] text-gray mt-4">
                  Join our monthly newsletter with news and specials. Let’s stay
                  in touch
                </p>
              </div>
              <div className="w-[55%] h-full  flex items-center justify-between">
                <input
                  type="text"
                  className="border-b-2 p-3 w-[30%] focus:outline-none"
                  placeholder="First Name"
                />
                <input
                  type="email"
                  className="border-b-2 p-3 w-[30%] focus:outline-none"
                  placeholder="Email Address"
                />

                <button className="w-[30%] h-[50px]  bg-black text-white bn">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
