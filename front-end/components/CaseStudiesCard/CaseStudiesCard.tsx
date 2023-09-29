import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface caseData {
  title: string;
  desc: string;
  img: StaticImageData;
}

interface Props {
  caseData: caseData;
  bgColor: string;
}

const CaseStudiesCard: React.FC<Props> = ({ caseData, bgColor }) => {
  const cardRandomBgColor = {
    backgroundColor: bgColor,
    borderRadius: "16px",
  };

  return (
    <div className="w-full sm:w-[48%]">
      <Link href="/case-studies/case1" className="block">
        <div
          style={cardRandomBgColor}
          className="h-[280px] lg:h-[330px] flex justify-center items-end relative"
        >
          <div className="absolute -bottom-2.5">
            <Image loading="lazy" src={caseData.img.src} alt="img-src" width={440} height={250} />
          </div>
        </div>
        <div className="mt-4 my-7 pl-14">
          <h3 className="heading-3 text-black-200 dark:text-white-900">{caseData.title}</h3>
          <p className="para-regular text-white-500">{caseData.desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default CaseStudiesCard;
