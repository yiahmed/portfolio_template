import React from "react";

const GreetingText = () => {
  return (
    <div className="w-full pr-2">
      <span
        className="flex items-center justify-center h-full font-mono text-base text-center lg:text-left md:text-left md:ml-2 sm:text-center font-extrabold text-[#8892AF] p-4"
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        <div className="overflow-auto max-h-[250px] ">
          <p>
            Hi there! I am a full-stack developer with a passion for
            problem-solving and being creative. I am also a fitness enthusiast
            who enjoys pushing my limits and staying active. As a developer, I
            am constantly looking for new challenges and opportunities to grow
            my skills.
          </p>
          <br></br>
          <p>
            Currently, I am actively seeking internships to further my knowledge
            and gain practical experience in the field. One quote that I live by
            is 'There is no elevator to success, You have to take the stairs' by
            Zig Ziglar. This quote motivates me to work hard and persevere
            through any obstacles that come my way.
          </p>
          <br></br>
          <p>
            I believe that with dedication and hard work, anything is possible,
            and I am excited to see where my journey as a developer takes me.
          </p>
        </div>
      </span>
    </div>
  );
};

export default GreetingText;
