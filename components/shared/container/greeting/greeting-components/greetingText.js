import React from "react";

const GreetingText = ({ text, image, index }) => {
  return (
    <div>
      {image && (
        <div className="w-2/3 pr-2 border-2 border-red-500">
          <span
            style={{
              color: index % 2 === 0 ? "green" : "red",
            }}
            className="flex items-center justify-center h-full font-mono text-xl font-extrabold text-center text-purple-600 "
          >
            {text}
          </span>
        </div>
      )}
    </div>
  );
};

export default GreetingText;
