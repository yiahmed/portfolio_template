import ProjectCards from "@/components/project cards/projectCards";
import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-full flex items-center justify-center space-x-10 animate-fade">
      <ProjectCards />
    </div>
  );
};

export default index;
