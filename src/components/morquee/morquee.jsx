import React from "react";
import "./marquee.css";

const Marquee = () => {
  const images = [
    "../../assets/images/yardley_logo.png",
    "../../assets/images/fine.png",
    "../../assets/images/sanita.png",
    "../../assets/images/rasasi.png",
    "../../assets/images/yardley_logo.png",
    "../../assets/images/fine.png",
    "../../assets/images/sanita.png",
    "../../assets/images/rasasi.png",
  ];

  return (
    <div className="morqueeWrapper">
      <div className="marqueeTrack">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Brand ${index + 1}`} />
        ))}
        {images.map((img, index) => (
          <img key={`duplicate-${index}`} src={img} alt={`Brand duplicate ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
