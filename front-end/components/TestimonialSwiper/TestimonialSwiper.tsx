"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Stars, userImg } from "@/public/assets";

const TestimonialSwiper = () => {
  return (
    <section className="bg-white-800 py-24">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="heading-2 text-black-200 text-center mb-12">
          What they <span className="bg-accentDef-secondary">say about</span> me
        </h1>

        <div className="">
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
            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSwiper;
