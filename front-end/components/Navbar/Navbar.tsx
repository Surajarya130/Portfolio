"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";

import MobileNavbar from "./MobileNavbar";
import { lightMode, logo, night } from "@/public/assets";
import { navLinks } from "@/public/constants";
import { Cross as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const imageSrc = theme === "dark" ? night : lightMode;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const handleToggle = () => {
    setShow(!show);
    console.log(show);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`w-full bg-white-800 dark:bg-black-300 sticky top-0 z-20 ${
        !top && `bg-white shadow-xl pt-3`
      } `}
    >
      <nav className="max-container px-[2.5%] flex items-center justify-between">
        <div className="w-full flex items-center justify-between py-3">
          <Image src={logo} alt="Logo" />
          <div className="hidden md:block">
            <ul className="flex justify-between">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className="small-bold text-accentDef-primaryLight dark:text-white-800 mx-4 flex items-center"
                >
                  {item.icon && <Image className="mr-2" src={item.icon} alt={item.title} />}{" "}
                  <Link href={item.id}>{item.title}</Link>
                </li>
              ))}
              <div className="bg-accentDef-primaryLight dark:bg-white-900 ml-2 mr-4 h-6 w-0.5"></div>
              <Image
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                // src={`${theme === "dark" ? night : lightMode}`}
                src={imageSrc}
                width={30}
                height={30}
                alt="Light-Mode"
              />
            </ul>
          </div>
        </div>

        <div id="hamMenu" className="md:hidden flex">
          <Image
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            // src={`${theme === "dark" ? night : lightMode}`}
            src={imageSrc}
            height={30}
            width={30}
            alt="Light-Mode"
            className="mr-3"
          />
          <Hamburger duration={0.8} onToggle={handleToggle} />
        </div>

        {show && <MobileNavbar isOpen={show} />}
      </nav>
    </div>
  );
};

export default Navbar;
