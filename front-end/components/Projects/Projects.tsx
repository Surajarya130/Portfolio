import { Hipnode, JobIt, Morent, arrRSm, arrRight } from "@/public/assets";
import Image from "next/image";
import { Button } from "../ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Morrent - A Car Rental Application",
      frontEndTech: "React, RTK, TW",
      backEndTech: "Node, Express MongoDB",
      projectLink: "/",
      imgSrc: Morent,
    },
    {
      title: "JobIT - A Job Finding Application",
      frontEndTech: "React, RTK, TW",
      backEndTech: "Rapid API",
      projectLink: "/",
      imgSrc: JobIt,
      rev: true,
    },
    {
      title: "Hipnode - A Social Media Application",
      frontEndTech: "React, RTK, TW",
      backEndTech: "Node, Express",
      projectLink: "/",
      imgSrc: Hipnode,
    },
  ];

  return (
    <section className="bg-white-900 py-24">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="heading-2 text-black-200 text-center mb-12">
          Featured <span className="bg-accentDef-secondary">Projects</span>
        </h1>

        {projects.map((project, ind) => (
          <div
            key={ind}
            className={`flex ${
              project.rev ? " flex-row-reverse" : ""
            }  bg-accentDef-primaryLight py-14 rounded-[20px] my-12`}
          >
            <div className="w-1/2 px-24 ">
              <h2 className="heading-2 text-white-900 mb-6">{project.title}</h2>
              <span className="small-regular text-white-900 bg-tagBtnColor p-[10px] rounded-[6px]">
                {project.frontEndTech}
              </span>
              <span className="ml-5 small-regular text-white-900 bg-tagBtnColor  p-[10px] rounded-[6px]">
                {project.backEndTech}
              </span>
              <p className="body-bold text-white-900 mt-12 flex items-center">
                See Detail Project
                <span className="ml-2">
                  <Image src={arrRight} alt="arr right" />
                </span>
              </p>
            </div>
            <div className="w-1/2">
              <Image src={project.imgSrc} alt={project.title} />
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="body-bold bg-accentDef-primaryLight text-white-900 px-9 py-7 rounded-[90px] hover:bg-accentDef-primaryDark  hover:text-white-800"
          >
            See More Case Studies{" "}
            <span className="ml-2">
              <Image src={arrRSm} alt="sm Arr" />{" "}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
