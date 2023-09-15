"useClient";

import { lineDeco } from "@/public/assets";
import Image from "next/image";
import { WorkExpCard } from "../index";
import { workExpData } from "@/public/constants";

const WorkExperience = () => {
  return (
    <section className="bg-white-900 py-24 z-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex gap-6">
          <div className="w-1/2 bg-black-200 rounded-2xl p-[120px] ">
            <h2 className="heading-2 text-white-900 leading-[52px]">Work Experience</h2>
            <p className="body-regular text-white-800 pt-9">
              Progress and milestones: A simple walkthrough of roles, projects, and achievements in
              my career.
            </p>
            <div className="flex mt-16 items-center">
              <Image src={lineDeco} alt="line-decoration" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-between ">
            <WorkExpCard workExpData={workExpData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
