import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIcons(true);
    }, 1000); // Delay the showing of icons by 1 second (adjust as needed) FIXME:

    return () => clearTimeout(timeoutId);
  }, []);

  const handleGitHubClick = () => {
    window.open('https://github.com/yiahmed', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/yahya-ahmed-1780b7168/', '_blank');
  };

  return (
    <div className='text-white flex flex-col justify-center items-center text-center h-full w-full'>
      <h1 className='text-5xl sm:text-7xl font-bold animate-fade mb-4'>Hey, I'm <br />Yahya Ahmed</h1>
      <h3 className='animate-fade'>A Junior Full-Stack Developer</h3>
      <div className='w-full py-7 space-x-16'>
        <GitHubIcon
          className={`text-3xl sm:text-5xl animate-fade ${showIcons ? '' : 'opacity-0'} cursor-pointer`}
          style={{ animationDelay: '1s' }}
          onClick={handleGitHubClick}
        />
        <LinkedInIcon
          className={`text-3xl sm:text-5xl animate-fade ${showIcons ? '' : 'opacity-0'} cursor-pointer`}
          style={{ animationDelay: '1s' }}
          onClick={handleLinkedInClick}
        />
        <EmailIcon className={`text-3xl sm:text-5xl animate-fade ${showIcons ? '' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Home;
