"use client";

import { CTA, arrRSm } from "@/public/assets";
import { Button } from "../ui/button";
import Image from "next/image";

const GetInTouch = () => {
  const backgroundStyles = {
    backgroundImage: `url(${CTA.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  return (
    <div>
      <section className="bg-white-900">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-local flex" style={backgroundStyles}>
            <div className="w-1/2">
              <h2 className="heading-2 text-black-200 p-20">
                Have a project in mind that requires technical expertise?{" "}
              </h2>
            </div>

            <div className="w-1/2 flex justify-end items-end p-20">
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
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
