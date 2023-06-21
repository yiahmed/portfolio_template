import React from "react";
const LinkTitle = ({ text }) => {
  return (
    <span
      style={{ fontFamily: "'Robot Mono', monospace" }}
      className="px-4 py-2 font-bold text-md"
    >
      {text}
    </span>
  );
};
export default LinkTitle;
