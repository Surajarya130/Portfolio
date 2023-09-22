if (typeof window === "undefined") {
  console.log("server side");
}

import Image from "next/image";
import React from "react";

const case1 = () => {
  return (
    <div>
      <div className="bg-white-800 py-24 ">
        <div className="max-container px-[2.5%]  py-10"></div>
      </div>

      <div className="bg-white-900 ">
        <div className="max-container px-[2.5%]  py-10"></div>
      </div>
    </div>
  );
};

export default case1;
