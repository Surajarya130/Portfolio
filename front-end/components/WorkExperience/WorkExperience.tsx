import { lineDeco } from "@/public/assets";
import Image from "next/image";

import { workExpData } from "@/public/constants";
import WorkExpCard from "../WorkExpCard/WorkExpCard";
import exp from "constants";

const WorkExperience = () => {
  return (
    <section className="bg-white-900 dark:bg-black-200 py-12 lg:py-24 z-0">
      <div className="max-container px-[2.5%]">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full sm:w-1/2 bg-black-200 dark:bg-white-800 rounded-2xl p-[60px] lg:p-[120px] flex flex-col justify-center">
            <h2 className="heading-2 text-white-900 dark:text-black-200 leading-[52px]">
              Work <span className="strip-bgW">Experi</span>ence
            </h2>
            <p className="body-regular text-white-800 dark:text-white-500 pt-9">
              Progress and milestones: A simple walkthrough of roles, projects, and achievements in
              my career.
            </p>
            <div className="flex mt-16 items-center">
              <Image className="text-red-900" src={lineDeco} alt="line-decoration" />
            </div>
          </div>
          <div className="w-full dark:bg-black-200 sm:w-1/2 flex flex-col">
            <div>
              <WorkExpCard workExpData={workExpData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
