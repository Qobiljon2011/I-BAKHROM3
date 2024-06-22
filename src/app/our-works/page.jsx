"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Ok from "../../../public/Screenshot 2024-06-14 202958.png";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import thirdd from "./channels4_profile-removebg-preview.png"
import "./Works.css";
import Footer from "../@footer/Footer";

const images = {
  ANIMATION: ["/a1.jpg", "/a2.jpg", "/a3.jpg", "/c4.jpg"],
  COMMERCIAL_INTERIORS: [
    "/c1.jpg",
    "/c2.jpg",
    "/c3.jpg",
    "/c4.jpg",
    "/c5.jpg",
    "/c6.jpg",
    "/c7.jpg",
  ],
  EXTERIORS: [
    "/e1.png",
    "/e2.png",
    "/e3.png",
    "/e4.png",
    "/e5.png",
    "/e6.png",
    "/e7.png",
  ],
  INTERIOR_DESIGN: [
    "/i1.png",
    "/i2.png",
    "/i3.png",
    "/i4.png",
    "/i5.png",
    "/i6.png",
  ],
  RESIDENTIAL_INTERIORS: [
    "/r1.png",
    "/r2.png",
    "/r3.png",
    "/r4.png",
    "/r5.png",
    "/r6.png",
    "/r7.png",
  ],
};

const OurWorks = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ANIMATION");

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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <header className="w-full h-[1200px] header">
        <nav
          className={`w-full h-[10%] flex items-center justify-between fixed navbar ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <div className="w-[10%] h-full flex items-center p-5">
            <Image src={Ok.src} alt="Logo" width={75} height={60} />
          </div>
          <div className="w-[30%] h-full flex items-center justify-between">
            <Link href="/" className="text-[18px] ui">
              Home
            </Link>
            <Link href="/our-works" className="text-[18px] ui">
              Works
            </Link>
            <Link href="/about" className="text-[18px] ui">
              About
            </Link>
            <Link href="/contact" className="text-[18px] ui">
              Contact
            </Link>
            <Link
              href="https://www.instagram.com/baxrom_interior/"
              className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://t.me/Baxrom_design"
              className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center"
            >
              <PiTelegramLogo />
            </Link>
            <Link
              href="https://3ddd.ru/users/bahrom6246"
              className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center"
            >
              <img src={thirdd.src} alt=""  className="text-white"/>
            </Link>
          </div>
        </nav>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[35%] h-[10%] flex flex-col items-center">
            <div className="w-full h-[55%] flex justify-center items-center">
              <p className="text-white text-[25px] font-bold">OUR WORKS</p>
            </div>
            <div className="hr"></div>
            <div className="w-full h-[44%] flex items-center justify-center">
              <p className="text-white font-bold">
                An overview of some of our renderings for both Residential and
                Commercial projects
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="mb-[50px]">
        <div className="w-[100%] h-[100px] flex items-center justify-center">
          <div className="w-[50%] h-full flex items-center justify-between">
            <button
              className={`w-[12%] h-[40%] flex items-center justify-center ${
                activeCategory === "ANIMATION" ? "active-link" : ""
              }`}
              onClick={() => handleCategoryClick("ANIMATION")}
            >
              ANIMATION
            </button>
            <button
              className={`w-[25%] h-[40%] flex items-center justify-center ${
                activeCategory === "COMMERCIAL_INTERIORS" ? "active-link" : ""
              }`}
              onClick={() => handleCategoryClick("COMMERCIAL_INTERIORS")}
            >
              COMMERCIAL INTERIORS
            </button>
            <button
              className={`w-[12%] h-[40%] flex items-center justify-center ${
                activeCategory === "EXTERIORS" ? "active-link" : ""
              }`}
              onClick={() => handleCategoryClick("EXTERIORS")}
            >
              EXTERIORS
            </button>
            <button
              className={`w-[17%] h-[40%] flex items-center justify-center ${
                activeCategory === "INTERIOR_DESIGN" ? "active-link" : ""
              }`}
              onClick={() => handleCategoryClick("INTERIOR_DESIGN")}
            >
              INTERIOR DESIGN
            </button>
            <button
              className={`w-[25%] h-[40%] flex items-center justify-center ${
                activeCategory === "RESIDENTIAL_INTERIORS" ? "active-link" : ""
              }`}
              onClick={() => handleCategoryClick("RESIDENTIAL_INTERIORS")}
            >
              RESIDENTIAL INTERIORS
            </button>
          </div>
        </div>
        <div className="w-[65%] flex ml-[300px] flex-wrap gap-12 pl-7">
          {images[activeCategory].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={activeCategory}
              width={361}
              height={361}
              className="dim-image w-[361px] h-[361px]"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default OurWorks;
