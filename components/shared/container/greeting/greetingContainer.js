import React from "react";
import Image from "next/image";
import GreetingImage from "./greeting-components/greetingImage";
import GreetingText from "./greeting-components/greetingText";
import GreetingTitle from "./greeting-components/greetingTitle";

const GreetingContainer = ({ text, title, index, image }) => {
  return (
    <div className="w-1/2 border aspect-w-4 aspect-h-3 my-4 bg-[#191825]  flex flex-col rounded-xl justify-center h-3/4 p-6 shadow-gray-500 shadow-lg">
      <GreetingTitle title={title} />
      <div className="flex flex-grow">
        <GreetingText text={text} image={image} index={index} />
        <GreetingImage image={image} />
      </div>
    </div>
  );
};

export default GreetingContainer;
