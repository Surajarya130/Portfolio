"use client";

import React from "react";
import Image from "next/image";
import { copyIcon, sideHero } from "@/public/assets";
import { Button } from "../ui/button";

const HeroSeciton = () => {
  return (
    <section className="bg-white-800 py-24">
      <div className="flex max-w-screen-xl mx-auto">
        <div id="heroContent" className="w-1/2">
          <p className="para-bold text-accentDef-primaryLight mb-7">Hi, I am Suraj</p>
          <h1 className="heading-1 text-black-200">
            Professional <span className="bg-accentDef-secondary h-6">Full Stack Developer</span>{" "}
            based in India
          </h1>
          <p className="body-regular text-white-500 w-11/12">
            Transforming the web one line of code at a time: Crafting cutting-edge digital
            experiences with precision, passion, and a profound commitment to excellence
          </p>
          <div className="">
            <Button
              variant="outline"
              className="body-bold bg-accentDef-primaryLight text-white-900 px-9 py-7 mt-9 rounded-[90px] hover:bg-accentDef-primaryDark  hover:text-white-800"
            >
              My Work
            </Button>
            <Button className="ml-5 body-bold text-white-500 bg-white-900 px-9 py-7 mt-9 rounded-[90px] hover:bg-black-200 hover:text-white-800">
              mesurajarya@gmail.com
              <Image className="m-4" src={copyIcon} alt="copyIcon" />
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={sideHero} alt="side hero" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSeciton;
