import React from "react";

const GreetingText = ({ text, image, index }) => {
  return (
    <div className="w-2/3 pr-2">
      <span
        // style={{
        //   color: index % 2 === 0 ? "green" : "red",
        // }}
        className="flex items-center justify-center h-full font-mono text-xl font-extrabold text-left text-[#F0EB8D] p-4 "
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        {text}
      </span>
    </div>
  );
};

export default GreetingText;
