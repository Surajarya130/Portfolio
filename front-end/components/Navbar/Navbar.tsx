"use client";

import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";

import Image from "next/image";
import { downloadIcon, lightMode, logo } from "@/public/assets";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  //   const [isActive, setIsActive] = useState(true);

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "case-studies",
      title: "Case Studies",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
      icon: downloadIcon,
    },
  ];

  return (
    <nav className="mx-auto my-3 flex h-12 w-full max-w-screen-xl justify-between  ">
      <Image src={logo} alt="Logo" />
      <ul className="flex items-center">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className="small-bold text-accentDef-primaryLight mx-4 flex items-center"
          >
            {item.icon && <Image className="mr-2" src={item.icon} alt={item.title} />} {item.title}
          </li>
        ))}
        <div className="bg-accentDef-primaryLight ml-2 mr-4 h-6 w-0.5"></div>
        <Image src={lightMode} alt="Light-Mode" />
      </ul>

      {isMobile && (
        <div>
          <MobileNavbar />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
