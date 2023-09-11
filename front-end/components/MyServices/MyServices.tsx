import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { arrIcon, backendIcon, serviceIcon, webOpt } from "@/public/assets";
import { cardData } from "@/public/constants";

const MyServices = () => {
  return (
    <section className="bg-white-800 py-24">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="heading-2 text-black-200 text-center mb-12">
          What service <span className="bg-accentDef-secondary">service</span> do I provide
        </h1>

        <div id="servicesCards" className="flex flex-wrap justify-between">
          {cardData.map((card, ind) => (
            <div className="group w-[23%]" key={ind}>
              <Card className="shadow-cardShadow p-2 transition-transform duration-500 ease-in-out hover:translate-y-20  bg-cardBg gap-10 group-hover:bg-accentDef-primaryLight  group-hover:text-white-900">
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
