import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
}

const CaseStudiesCard: React.FC<Props> = ({ imageSrc }) => {
  return (
    <div className="w-1/2 bg-[#5CAFFC] h-[330px] rounded-2xl flex items-end justify-center relative">
      <Image src={imageSrc} alt="img-src" width={440} height={240} />
    </div>
  );
};

export default CaseStudiesCard;
