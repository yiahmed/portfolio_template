import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import React from "react";

const yahyaImg = "/IMG_2584.jpg";
const aboutInfo = [
  {
    title: "About me",
    image: yahyaImg,
    description: "I am a software engineer with a passion for building things. I am a software engineer with a passion for building things. I am a software engineer with a passion for building things.",
  },
  {
    title: "skills",
    image: null,
    description:
      "I am a software engineer with a  passion for building things.",
  },
  {
    title: "interest",
    image: null,
    description:
      "I am a software engineer with a  passion for building things.",
  },
];
const About = () => {
  return (
    <>
    {aboutInfo.map((info, index) => {
      return (
        <GreetingContainer
          key={index}
          index={index}
          image={info.image}
          text={info.description}
          title={info.title}
        />
      );
    })}
  </>
  );
};

export default About;
