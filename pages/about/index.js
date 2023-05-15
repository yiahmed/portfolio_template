import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import TechStackContainer from "@/components/shared/container/techstack/techStackContainer";
import React from "react";

const yahyaImg = "/IMG_2584.jpg";
const aboutInfo = [
  {
    title: "About me",
    image: yahyaImg,
    description:
      "Hi there! I am a full-stack developer with a passion for problem-solving and being creative. I am also a fitness enthusiast who enjoys pushing my limits and staying active. As a developer, I am constantly looking for new challenges and opportunities to grow my skills.",
  },
  {
    title: "skills",
    image: yahyaImg,
    description:
      "Currently, I am actively seeking internships to further my knowledge and gain practical experience in the field. One quote that I live by is 'There is no elevator to success, You have to take the stairs' by Zig Ziglar. This quote motivates me to work hard and persevere through any obstacles that come my way.",
  },
  {
    title: "interest",
    image: yahyaImg,
    description:
      "I believe that with dedication and hard work, anything is possible, and I am excited to see where my journey as a developer takes me.",
  },
];
const About = () => {
  return (
    <>
      {aboutInfo.map((info, index) => {
        return (
          <>
            <GreetingContainer
              key={index}
              index={index}
              image={info.image}
              text={info.description}
              title={info.title}
            />
          </>
        );
      })}
      <TechStackContainer />
    </>
  );
};

export default About;
