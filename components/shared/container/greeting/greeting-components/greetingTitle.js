import React from "react";

const GreetingTitle = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center h-1/6 ">
      <h2 className="flex items-center justify-center h-full text-3xl text-[white] font-semibold relative ">
        {title}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#865DFF] opacity-0 transition-opacity duration-300 glow-bar"></div>
      </h2>
    </div>
  );
};

export default GreetingTitle;
