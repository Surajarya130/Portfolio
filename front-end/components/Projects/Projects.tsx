import Image from "next/image";
import { Button } from "../ui/button";
import { projects } from "@/public/constants";
import { arrRight, arrRSm } from "@/public/assets";

const Projects = () => {
  return (
    <section className="bg-white-900 dark:bg-black-200 py-12 lg:py-24">
      <div className="max-container px-[2.5%]">
        <h1 className="heading-2 text-black-200 dark:text-white-900 text-center mb-12">
          Featured <span className="strip-bgW">Projects</span>
        </h1>

        {projects.map((project, ind) => (
          <div
            key={ind}
            id="projectCard"
            className={`flex-col sm:flex-row sm:flex ${
              project.rev ? "sm:flex-row-reverse" : ""
            }  bg-accentDef-primaryLight py-14 rounded-[20px] my-6 md:my-8 lg:my-12 overflow-hidden `}
          >
            <div className="w-full sm:w-1/2 px-6 sm:px-8 lg:px-24">
              <h2 className="heading-2-sm lg:heading-2  text-white-900 mb-6">{project.title}</h2>
              <div className="mt-2">
                <span className="small-regular mr-5 text-white-900 bg-tagBtnColor p-[10px] rounded-[6px]">
                  {project.frontEndTech}
                </span>
                <span className="small-regular text-white-900 bg-tagBtnColor  p-[10px] rounded-[6px]">
                  {project.backEndTech}
                </span>
              </div>
              <p className="body-bold text-white-900 my-8 sm:mt-12 flex items-center">
                See Detail Project
                <span className="ml-2">
                  <Image src={arrRight} alt="arrright" />
                </span>
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center" id="projectCardImg">
              <Image
                className={`w-10/12 mx-auto sm:w-full ${
                  ind % 2 === 0 ? "!left-0 sm:!left-7" : "!right-0 sm:!right-12"
                }`}
                src={project.imgSrc}
                alt={project.title}
              />
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
