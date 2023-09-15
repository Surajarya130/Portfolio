"use client";

import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";

import Image from "next/image";
import { lightMode, logo } from "@/public/assets";
import { navLinks } from "@/public/constants";
import { Cross, Cross as Hamburger } from "hamburger-react";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <nav className="w-full">
      <div className="max-w-screen-xl w-full py-3  flex justify-between items-center  mx-auto">
        <Image src={logo} alt="Logo" />
        <div className="">
          <ul className="flex items-center">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="small-bold text-accentDef-primaryLight mx-4 flex items-center"
              >
                {item.icon && <Image className="mr-2" src={item.icon} alt={item.title} />}{" "}
                <Link href={item.id}>{item.title}</Link>
              </li>
            ))}
            <div className="bg-accentDef-primaryLight ml-2 mr-4 h-6 w-0.5"></div>
            <Image src={lightMode} alt="Light-Mode" />
          </ul>
        </div>
      </div>

      <div id="hamMenu" className="hidden">
        <Image src={lightMode} alt="Light-Mode" className="mr-3" />
        <Hamburger duration={0.8} onToggle={handleToggle} />
      </div>

      {show && <MobileNavbar isOpen={show} />}
    </nav>
  );
};

export default Navbar;
