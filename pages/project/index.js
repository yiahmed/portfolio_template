import ProjectCards from "@/components/project page/projectCards";
import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center animate-fade">
      <h1 className="flex items-center justify-center h-12 text-5xl font-bold text-[#CCD6F5] mb-16">
        Some things I&apos;ve built:
      </h1>
      <div className="flex space-x-10">
        <ProjectCards />
      </div>
    </div>
  );
};

export default index;
