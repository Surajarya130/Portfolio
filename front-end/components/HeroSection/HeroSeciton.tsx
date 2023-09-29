"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "../ui/button";
import { sideHero, checkGreen, copyIcon } from "@/public/assets";
import { getProfile } from "@/sanity.query";
import type { ProfileType } from "@/types";

const HeroSeciton = () => {
  const [ifCopied, setIfCopied] = useState(false);
  const [profileData, setProfileData] = useState<ProfileType[] | null>(null);

  const fetchProfile = async () => {
    try {
      const profile: ProfileType[] = await getProfile();
      setProfileData(profile);
    } catch (error) {
      console.log("Error in fetching", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleCopyClick = () => {
    console.log("copied");
    setIfCopied(true);
    setTimeout(() => {
      setIfCopied(false);
    }, 2000);
    toast.success("Copied", {
      duration: 2000,
    });
  };

  return (
    <section className="bg-white-800 dark:bg-black-300 py-2 md:py-12 lg:py-4 " id="heroContainer">
      {profileData &&
        profileData.map((data) => (
          <div
            className="max-container p-[2.5%] flex flex-col sm:flex-row items-center"
            key={data._id}
          >
            <div className="w-full sm:w-1/2">
              <p className="para-bold text-accentDef-primaryLight mt-4 sm:mb-7 md:mt-7">
                Hi, I am {data.fullName}
              </p>
              <h1 className="text-[36px] sm:heading-1 font-bold">
                Professional <span className="strip">{data.profession}</span> based in{" "}
                {data.location}
              </h1>

              <p className="body-regular text-white-500 dark:text-white-800 w-11/12">
                {data.shortBio}
              </p>
              <div>
                <Button className="w-full lg:w-fit mr-4 btn-primary hover:bg-accentDef-primaryDark ">
                  My Work
                </Button>

                <Button
                  onClick={handleCopyClick}
                  className="body-bold w-full lg:w-fit text-white-500 bg-white-900 px-6 py-7 my-5 sm:mt-9 rounded-[90px] hover:bg-black-200 hover:text-white-800 my"
                >
                  {data.email}
                  <Image
                    className="ml-2"
                    width={20}
                    height={20}
                    src={ifCopied ? checkGreen : copyIcon}
                    alt="check-Icon"
                  />
                </Button>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <Image src={sideHero} alt="side hero" className="w-full" />
            </div>
          </div>
        ))}

      <Toaster position="top-right" />
    </section>
  );
};

export default HeroSeciton;
