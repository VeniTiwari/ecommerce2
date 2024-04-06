import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import slider1 from "../components/images/slider.jpg";
import slider2 from "../components/images/slider2.jpg";
import slider3 from "../components/images/slider3.jpg";
import slider4 from "../components/images/slider4.jpg";


const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  color: "white",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowBack size={24} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowForward size={24} />
    </button>
  ),
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  borderRadius: "15px",
};

const slideImages = [
  {
    url: slider1,
  },
  {
    url: slider2,
  },
  {
    url: slider3,
  },
  {
    url: slider4,
  },
];

function Slider() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 pt-12">
        <Slide {...properties} transitionDuration={500}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Slider;
