import Image from "next/image";
import React from "react";
import GreetingImage from "./greeting-components/greetingImage";
import GreetingText from "./greeting-components/greetingText";
import GreetingTitle from "./greeting-components/greetingTitle";

const GreetingContainer = ({ text, title, index, image }) => {
  return (
    
    <div className="flex items-center justify-center w-full h-full border-2 border-red-500">
      <div className="w-1/2 border rounded shadow-lg h-1/2 aspect-w-4 aspect-h-3 border-2 border-red-500">
        <div className="flex flex-col h-full bg-[#3F4E4F] border-2 border-red-500">
          <GreetingTitle title={title}/>
          <div className="flex justify-center flex-grow border-2 border-red-500">
            <GreetingText text={text} image={image} index={index}/>
            <GreetingImage image={image}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingContainer;
