import React from "react";
import Image from "next/image";

const yahyaImg = "/IMG_2584.jpg";

const GreetingImage = () => {
  return (
    <div className="w-1/3 flex items-center justify-center m-5">
      {yahyaImg && (
        <div className="h-64 w-64 flex justify-center items-center relative glow-image">
          <Image
            src={yahyaImg}
            alt="profile picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg image-glow-yellow"
          />
        </div>
      )}
    </div>
  );
};

export default GreetingImage;
