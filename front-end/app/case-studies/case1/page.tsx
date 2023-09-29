import { MyProcess, TechUsedInProject } from "@/components/index";
import { Morent, arrRightBlue, carBW, earth, githubBlue, projectCoverImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const case1 = () => {
  return (
    <div>
      <section>
        <div className="bg-white-800 dark:bg-black-300">
          <div className="max-container px-[2.5%]  py-10">
            <section id="caseStudoesLanderPage">
              <p className="para-regular uppercase text-accentDef-primaryLight text-center">
                WEB DEV PROJECT
              </p>
              <h1 className="text-[36px] sm:heading-1 font-bold text-center sm:text-left">
                <span className="strip">Morrent</span> - A Car Rental Website
              </h1>
              <div className="w-full flex justify-center py-6 sm:py-14">
                <Image src={Morent} alt="morent" />
              </div>
              <div className="flex justify-evenly w-full sm:w-1/2 mx-auto">
                <button className="animate-wiggle text-accentDef-primaryLight">
                  <Link href="fb.com" className="flex">
                    <Image src={earth} alt="earth" className="mr-1" />
                    Demo Site
                    <Image className="ml-1" src={arrRightBlue} alt="arr Blue" />
                  </Link>
                </button>
                <button className=" text-accentDef-primaryLight">
                  <Link href="fb.com" className="flex">
                    <Image src={githubBlue} alt="earth" className="mr-1" />
                    Source Code
                    <Image className="ml-1" src={arrRightBlue} alt="arr Blue" />
                  </Link>
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white-900 dark:bg-black-200">
          <div className="max-container px-[2.5%]  py-10">
            <div className="py-10 flex flex-wrap sm:flex-row  justify-center sm:justify-between">
              <div className="w-full sm:w-1/4 mb-3 sm:mb-0">
                <p className="body-bold text-black-400 dark:text-white-500 mb-0 sm:mb-2">My Role</p>
                <h3 className="para-bold sm:base-bold text-black-200 dark:text-white-900">
                  Software Engineer
                </h3>
              </div>
              <div className="w-full sm:w-1/4 mb-3 sm:mb-0">
                <p className="body-bold text-black-400 dark:text-white-500 mb-0 sm:mb-2">
                  Start Date
                </p>
                <h3 className="para-bold sm:base-bold text-black-200 dark:text-white-900">
                  24/07/2023
                </h3>
              </div>
              <div className="w-full sm:w-1/4 mb-3 sm:mb-0">
                <p className="body-bold text-black-400 dark:text-white-500 mb-0 sm:mb-2">
                  End Date
                </p>
                <h3 className="para-bold sm:base-bold text-black-200 dark:text-white-900">
                  24/08/2023
                </h3>
              </div>{" "}
            </div>

            <div className="py-16">
              <p className="text-accentDef-primaryLight small-bold">Technologies used</p>
              <h3 className="heading-3 text-black-200 dark:text-white-900">Tech Stack</h3>
              <TechUsedInProject />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white-800 dark:bg-black-300">
          <div className="max-container px-[2.5%]  py-16">
            <p className="para-regular text-white-500 dark:text-white-800">
              Morent, a cutting-edge car rental application that was developed using the MERN stack.
              The app boasts a dynamic homepage that showcases featured vehicles, along with
              convenient pickup & drop-off location options & a comprehensive list of available
              cars.
              <br />
              <br />
              My team and I also developed the car listing page which offers a search bar and
              various filtering options for users to find the perfect vehicle. Additionally, it has
              a car details page which provides users with detailed information along with
              suggestions for other recommended vehicles.
              <br />
              <br />
              Car owners are also able to list their cars for rent through our Add Car page, while
              users can easily track their rented and rented-out cars through their profile page.
              Overall, we have created an intuitive and user-friendly MVP version of the platform
              that will make renting a car a breeze.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white-900 dark:bg-black-200">
          <div className="max-container px-[2.5%]  py-16">
            <p className="text-accentDef-primaryLight small-bold">Problem</p>
            <h3 className="heading-3 text-black-200 dark:text-white-900">Problem Statement</h3>

            <p className="para-regular text-white-500 dark:text-white-800 mt-6">
              One of the main problems that people face when looking to rent a car is the hassle of
              finding a reliable and user-friendly platform to search for and book rental cars. In
              addition, car owners who want to rent out their vehicles often struggle to find a
              suitable platform to list their cars and manage their rentals.
            </p>

            <div className="mt-8  w-full">
              <Image src={carBW} alt="car BW" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full">
          <div className="py-3 sm:py-9 bg-accentDef-primaryLight dark:bg-accentDef-primaryDark text-center">
            <h3 className="small-bold sm:heading-3 text-white-900 uppercase">
              High-Fidelity Figma Design
            </h3>
          </div>

          <Image src={projectCoverImg} alt="Project Cover" />
        </div>
      </section>

      <section>
        <div className="max-container px-[2.5%] py-16 bg-white-900 dark:bg-black-200">
          <p className="text-accentDef-primaryLight small-bold">Way of Work</p>
          <h3 className="heading-3 text-black-200 dark:text-white-900">My Process</h3>

          <MyProcess />
        </div>
      </section>
    </div>
  );
};

export default case1;
