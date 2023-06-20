import React from "react";
import StackIcons from "./techStack-compnents/stackIcons";
import StackTitle from "./techStack-compnents/stackTitle";

const TechStackContainer = () => {
  return (
    <div className="w-auto sm:w-full md:w-full lg:w-full h-auto aspect-w-4 aspect-h-3 my-4 bg-gradient-to-b from-[#1F4653] to-[#191825] flex flex-col rounded-xl justify-center p-6 shadow-gray-500 shadow-lg animate-fade">
      <div>
        <StackTitle />
        <StackIcons />
      </div>
    </div>
  );
};

export default TechStackContainer;
