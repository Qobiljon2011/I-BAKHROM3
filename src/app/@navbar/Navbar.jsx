"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Ok from "../../../public/Screenshot 2024-06-14 202958.png";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import thirdd from "./channels4_profile-removebg-preview.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  return (
    <div>
      <nav
        className={`w-full h-[10%] flex items-center justify-between fixed navbar ${
          scrolled ? "scrolled" : ""
        } ${pathname === "/about" ? "bg-black" : ""}
        ${pathname === "/contact" ? "bg-black" : ""}`}
      >
        <div className="w-[10%] h-full flex items-center p-5">
          <img src={Ok.src} alt="" width={75} height={60} />
        </div>
        <div className="w-[30%] h-full flex items-center justify-between">
          <Link
            href="/"
            className={`text-[18px] ui ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/our-works"
            className={`text-[18px] ui ${
              pathname === "/our-works" ? "active" : ""
            }`}
          >
            Works
          </Link>
          <Link
            href="/about"
            className={`text-[18px] ui ${
              pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-[18px] ui ${
              pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="https://www.instagram.com/baxrom_interior/"
            className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center tg"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://t.me/bestwishes711"
            className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center tg"
          >
            <PiTelegramLogo />
          </Link>
          <Link
            href="https://3ddd.ru/users/bahrom6246"
            className="w-[40px] h-[40px] text-[25px] border-r-[100%] text-white tg2 flex items-center justify-center tg"
          >
            <img src={thirdd.src} alt="" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
