import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { arrIcon, backendIcon, serviceIcon, webOpt } from "@/public/assets";

const MyServices = () => {
  const cardContent = [
    {
      logo: serviceIcon,
      title: "Analytics & SEO",
      desc: "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
    },
    {
      logo: arrIcon,
      bg: "accentDef-primaryLight",
      iconBg: "white-900",
      title: "Front-End Dev",
      desc: "Implement tracking & analytics tools to monitor website performance & improve SEO.",
    },
    {
      logo: backendIcon,
      title: "Back-End Dev",
      desc: "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
    },
    {
      logo: webOpt,
      title: "Web Optimization",
      desc: "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
    },
  ];

  return (
    <section className="bg-white-800 py-24">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="heading-2 text-black-200 text-center mb-12">
          What service <span className="bg-accentDef-secondary">service</span> do I provide
        </h1>

        <div id="servicesCards" className="flex flex-wrap justify-between">
          {cardContent.map((card, ind) => (
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
