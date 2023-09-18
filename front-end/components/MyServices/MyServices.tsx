import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { arrIcon, backendIcon, serviceIcon, webOpt } from "@/public/assets";
import { cardData } from "@/public/constants";

const MyServices = () => {
  return (
    <section className="bg-white-800 dark:bg-black-300 py-6 md:py-12 lg:py-24">
      <div className="max-container px-[2.5%]">
        <h1 className="heading-2 text-black-200 dark:text-white-900 text-center mb-12">
          What service <span className="strip">service</span> do I provide
        </h1>

        <div id="servicesCards" className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card, ind) => (
            <div className="group" key={ind}>
              <Card className="shadow-cardShadow dark:shadow-cardShadowDark p-2 transition-transform duration-500 ease-in-out hover:translate-y-10  bg-cardBg dark:bg-cardBgDark gap-10 group-hover:bg-accentDef-primaryLight  group-hover:text-white-900 h-full">
                <CardHeader className="mb-3">
                  <div className="icon h-16 w-16  bg-accentDef-primaryLight rounded-[10px] flex justify-center items-center group-hover:bg-white-900">
                    <Image
                      src={card.logo}
                      alt={card.title}
                      className="group-hover:bg-accentDef-primaryLight"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <h2 className="base-bold ">{card.title}</h2>
                </CardContent>
                <CardFooter>
                  <p className="small-regula text-white-500 group-hover:text-white-900">
                    {card.desc}
                  </p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
