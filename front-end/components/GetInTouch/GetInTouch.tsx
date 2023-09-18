"use client";

import { CTA, arrRSm } from "@/public/assets";
import { Button } from "../ui/button";
import Image from "next/image";
import SocialConnection from "../SocialConnection/SocialConnection";

const GetInTouch = () => {
  const backgroundStyles = {
    backgroundImage: `url(${CTA.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    backgroundColor: "#ffbf61",
  };
  return (
    <div>
      <section className="bg-white-900 dark:bg-black-200 pb-10">
        <div className="max-container px-[2.5%]">
          <div
            className="bg-local flex-col sm:flex-row sm:flex rounded-[20px]"
            style={backgroundStyles}
          >
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-bold sm:heading-2 text-black-200 lg:p-20 sm:p-16 p-4">
                Have a project in mind that requires technical expertise?{" "}
              </h2>
            </div>

            <div className="w-full sm:w-1/2 flex lg:justify-end justify-center items-center lg:items-end lg:p-20 pb-16">
              <Button
                variant="outline"
                className="body-bold bg-accentDef-primaryLight text-white-900 px-9 py-7 rounded-[90px] hover:bg-accentDef-primaryDark  hover:text-white-800"
              >
                Get In Touch With Me
                <span className="ml-2">
                  <Image src={arrRSm} alt="sm Arr" />
                </span>
              </Button>
            </div>
          </div>
          <div className="footer flex-col sm:flex sm:flex-row sm:justify-between items-center py-10">
            <p className="body-regular text-center text-black-400">
              © 2023 Adrian. All rights reserved.
            </p>
            <div className="mt-3">
              <SocialConnection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
