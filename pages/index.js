import React, { useEffect, useState, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import Typed from "typed.js";

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIcons(true);
    }, 1000); // Delay the showing of icons by 1 second (adjust as needed) FIXME:

    return () => clearTimeout(timeoutId);
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Junior Full-Stack Developer.",
        "Fitness Enthusiast.",
        "Tester.",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 600,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 600,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const handleGitHubClick = () => {
    window.open("https://github.com/yiahmed", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/yahyaiahmed/", "_blank");
  };

  const handleEmailClick = () => {};

  return (
    <div className="text-[#8892AF] flex flex-col justify-center items-center text-center h-full w-full">
      <h1 className="text-2xl sm:text-4xl text-[#63FFDA] animate-fade mb-4 tracking-tight">
        Hey, my name is: <br />
      </h1>
      <h1 className="animate-fade text-5xl sm:text-7xl font-bold mb-4 tracking-tight text-[#CCD6F5]">
        Yahya Ahmed
      </h1>
      <h3 className="animate-fade text-[#8892AF] font-bold text-3xl sm:text-5xl">
        And I'm a <span ref={el}></span>
      </h3>

      <div className="w-full py-7 space-x-16">
        <GitHubIcon
          className={`text-3xl sm:text-5xl animate-fade ${
            showIcons ? "" : "opacity-0"
          } cursor-pointer`}
          style={{ animationDelay: "1s" }}
          onClick={handleGitHubClick}
        />
        <LinkedInIcon
          className={`text-3xl sm:text-5xl animate-fade ${
            showIcons ? "" : "opacity-0"
          } cursor-pointer`}
          style={{ animationDelay: "1s" }}
          onClick={handleLinkedInClick}
        />
        <Link href="/contact">
          <EmailIcon
            onClick={handleEmailClick}
            className={`text-3xl sm:text-5xl animate-fade ${
              showIcons ? "" : "opacity-0"
            }`}
            style={{ animationDelay: "1s" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
