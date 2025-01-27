import React from "react";
import "./marquee.css";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
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
      <Marquee >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Brand ${index + 1}`} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
