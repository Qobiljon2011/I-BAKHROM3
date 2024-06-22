import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import third from "./channels4_profile-removebg-preview.png"
import Link from 'next/link';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="w-full h-[400px]  bg-black flex justify-center">
      <div className="w-[60%] h-[70%]  mt-[50px] flex justify-between">
        <div className="w-[30%] h-[60%] ">
          <p className="text-white text-2xl font-bold">I-BAKHROM</p>
          <div className="w-[40%] h-[50%]  flex justify-between items-center">
            <Link
              href="https://www.instagram.com/baxrom_interior/"
              className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://t.me/bestwishes711"
              className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center"
            >
              <PiTelegramLogo />
            </Link>
            <Link
              href="https://3ddd.ru/users/bahrom6246"
              className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center"
            >
              <img src={third.src} alt="" />
            </Link>
          </div>
          <Link href="/contact" className="text-white mt-2 p1 co">Contact</Link>
        </div>
        <div className="w-[15%] h-[80%] ">
          <div className="w-full h-[30%] ">
            <p className="text-[#214b5e] font-bold">COMPANY</p>
          </div>
          <div className="w-full h-[70%] flex flex-col">
            <Link href="/our-works" className="text-white p1 w">OUR WORKS</Link>
            <Link href="/" className="text-white mt-3 p1 w">REFUNDS POLICY</Link>
            <Link href="/" className="text-white mt-3 p1 w">PRIVARCY POLICY</Link>
          </div>
        </div>
        <div className="w-[7%] h-[90%] ">
          <div className="w-full h-[30%]  flex justify-center">
            <p className="text-[#214b5e] font-bold">Links</p>
          </div>
          <div className="w-full h-[70%]  flex flex-col justify-between items-center">
            <Link href="/" className="text-white p1 h">
              Home
            </Link>
            <Link href="/our-works" className="text-white p1 h">
              Works
            </Link>
            <Link href="/about" className="text-white p1 h">
              About
            </Link>
            <Link href="/contact" className="text-white p1 h">
              Contact 
            </Link>
          </div>
        </div>
        <div className="w-[22%] h-full ">
          <div className="w-[60%] h-[27%] ">
            <p className="text-[#214b5e] font-bold">
              SIGN UP FOR OUR NEWSLETTER
            </p>
          </div>
          <div className="w-full h-[53%] ">
            <div className="w-full h-[49%]  flex flex-col justify-between">
              <p className=" w-[100%] h-[38%] text-[#214b5e] font-bold">
                First Name:
              </p>
              <input
                type="text"
                className="w-full h-[58%] bg-black text-white border-b-2"
              />
            </div>
            <div className="w-full h-[49%]  flex flex-col justify-between">
              <p className=" w-[100%] h-[38%] text-[#214b5e] font-bold">
                Email Address:
              </p>
              <input
                type="email"
                className="w-full h-[58%] bg-black text-white border-b-2"
              />
            </div>
          </div>
          <div className="w-full h-[18%]  mt-1">
            <button className="w-full h-full text-white hover:bg-[#214b5e] transition font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer