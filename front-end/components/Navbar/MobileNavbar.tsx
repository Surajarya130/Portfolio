"use client";
import React from "react";
import Image from "next/image";

import { navLinks } from "@/public/constants";

interface MobNavbarProp {
  isOpen: boolean;
}

const MobileNavbar: React.FC<MobNavbarProp> = ({ isOpen }) => {
  console.log(isOpen);
  return (
    <div
      className={`h-[100vh] w-screen bg-white-800 right-0 z-[100] shadow-2xl top-20 fixed 
      ${isOpen ? "animate-open-right" : "animate-close-right"} `}
    >
      <div className="">
        <ul className="flex items-center flex-col">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="small-bold text-accentDef-primaryLight mx-4 flex items-center py-6"
            >
              {item.icon && <Image className="mr-2" src={item.icon} alt={item.title} />}{" "}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
