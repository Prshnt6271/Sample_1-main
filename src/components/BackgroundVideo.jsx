import React from "react";
import arc from "../assets/arc.mp4";

const BackgroundVideo = () => {
  return (
    <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
      <source src={arc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;