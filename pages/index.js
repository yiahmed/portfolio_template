import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import React from "react";
const string = ["Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요"];
const aboutInfo = [
  {
    title: "about me",
    image: null,
    description: "I am a software engineer with a passion for building things. ",
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

const index = () => {
  return (
    <>
      {aboutInfo.map((info, index) => {
        return (
          <GreetingContainer
            key={index}
            index={index}
            text={info.description}
            title={info.title}
          />
        );
      })}
    </>
  );
};
export default index;
