import React from "react";
import Image from "next/image";

const GreetingImage = ({ image }) => {
  return (
    <div className="w-1/3 flex items-center justify-center m-5">
      {image && (
        <div className="h-64 w-64 flex justify-center items-center relative glow-image">
          <Image
            src={image}
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
