import React from "react";

const GreetingText = ({ text, image, index }) => {
  return (
    <div className="w-2/3 pr-2">
      <span
        className="flex items-center justify-center h-full font-mono text-base text-center lg:text-left md:text-left md:ml-2 sm:text-center font-extrabold text-[#F0EB8D] p-4"
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        {text}
      </span>
    </div>
  );
};

export default GreetingText;
