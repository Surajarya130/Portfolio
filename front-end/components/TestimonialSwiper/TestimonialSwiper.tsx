"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import { Stars, userImg } from "@/public/assets";

const TestimonialSwiper = () => {
  return (
    <section className="bg-white-800 py-24 dark:bg-black-300">
      <div className="max-container px-[2.5%]">
        <h1 className="heading-2 text-black-200 dark:text-white-900 text-center mb-12">
          What they <span className="bg-accentDef-secondary">say about</span> me
        </h1>

        <div className="relative">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="flex">
                <div className="w-1/4">
                  <Image src={userImg} alt="adrian" />
                </div>
                <div className="w-3/4  items-center">
                  <p className="base-regular text-white-500">
                    I have had the pleasure of working with Adrian as a Software Developer and can
                    confidently say that he is a valuable asset to any team. He is highly skilled in
                    ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and
                    consistently delivers high-quality code.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="w-1/4">
                  <Image src={userImg} alt="adrian" />
                </div>
                <div className="w-3/4  items-center">
                  <p className="base-regular text-white-500">
                    I have had the pleasure of working with Adrian as a Software Developer and can
                    confidently say that he is a valuable asset to any team. He is highly skilled in
                    ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and
                    consistently delivers high-quality code.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="w-1/4">
                  <Image src={userImg} alt="adrian" />
                </div>
                <div className="w-3/4  items-center">
                  <p className="base-regular text-white-500">
                    I have had the pleasure of working with Adrian as a Software Developer and can
                    confidently say that he is a valuable asset to any team. He is highly skilled in
                    ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and
                    consistently delivers high-quality code.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSwiper;
