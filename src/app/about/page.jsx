"use client";
import React from "react";
import { Prata } from "next/font/google";
import Link from "next/link";

const prata = Prata({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <div className={`w-full`}>
      <div className="w-full h-[300px]  border-black flex items-center justify-center">
        <p className="text-black mt-[100px] font-bold text-[24px]">
          I-BAKHROM is a team of CG artists specialized in producing stunning
          Computer Generated Imagery. We <br /> help visualize the unbuilt
          spaces and products to communicate our client’s vision effectively.
        </p>
      </div>
      <div className="w-full h-[650px] border-black flex items-center justify-center">
        <div className="w-[65%] h-full ">
          <div className="w-full h-[55%]  flex">
            <div className="w-[50%] h-full ">
              <p className={`text-[#214b5e] text-[44px] ${prata.className}`}>
                SERVICES
              </p>
            </div>
            <div className="w-[50%] h-full  flex flex-col justify-between">
              <p className="text-gray-600 text-[18px]">
                Architectural Renderings
              </p>
              <p className="text-gray-600 text-[18px]">Interior Renderings</p>
              <p className="text-gray-600 text-[18px]">
                Walk-through Animations
              </p>
              <p className="text-gray-600 text-[18px]">Virtual Tours</p>
              <p className="text-gray-600 text-[18px]">Furniture Renderings</p>
              <p className="text-gray-600 text-[18px]">
                Yachting/ Automotive Renderings
              </p>
              <p className="text-gray-600 text-[18px]">
                Property Marketing Visuals
              </p>
            </div>
          </div>
          <div className="w-full h-[45%]  flex items-center">
            <div className="w-full h-[40%]  flex">
              <div className="w-[50%] h-[100%]  flex items-center">
                <p className={`text-[#214b5e] text-[44px] ${prata.className}`}>
                  CONTACT
                </p>
              </div>
              <div className="w-[50%] h-full  flex items-center">
                <p className="text-[18px] text-gray-600">
                  If you have a project and want to find out more please contact
                  us at bahrom6246@mail.ru or in telegram :{" "}
                  <Link href="https://t.me/bestwishes711" className="text-blue-500">
                    Best Wishes
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
