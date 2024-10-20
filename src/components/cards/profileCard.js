import { useState, useEffect } from "react";
import "./profileCard.scss";

const profileData = [
  {
    description:
      "A skating coach plays many roles: advisor, mentor, trainer, and unwavering supporter. From teaching the basics to guiding advanced training, they shape skaters' journeys at every stage.",
    imgSrc: "rahul.png",
  },
  {
    description:
      "Jane1 is a visionary leader driving innovation in the tech space. She has a passion for turning dreams into reality and shaping the future of technology.",
    imgSrc: "rahul.png",
  },
  {
    description:
      "Jane2 is a visionary leader driving innovation in the tech space. She has a passion for turning dreams into reality and shaping the future of technology.",
    imgSrc: "rahul.png",
  },
  {
    description:
      "Jane3 is a visionary leader driving innovation in the tech space. She has a passion for turning dreams into reality and shaping the future of technology.",
    imgSrc: "rahul.png",
  },
  {
    description:
      "Jane4 is a visionary leader driving innovation in the tech space. She has a passion for turning dreams into reality and shaping the future of technology.",
    imgSrc: "rahul.png",
  },
];

export default function ProfileCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animationKey, setAnimationKey] = useState(0);

  const size = profileData.length;

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % size);
    triggerAnimation();
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + size) % size);
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setAnimationKey((prev) => prev + 1); // Change the key to trigger re-render
  };

  const { description, imgSrc } = profileData[currentIndex];

  return (
    <div className="profile-card">
      <div className="profile-picture">
        <img
          key={animationKey}
          className={`profile-img`}
          src={imgSrc}
          alt="Profile"
        />
      </div>
      <div className="profile-text">
        <div className="container">
          <span>
            <strong>Rahul</strong> Rane
          </span>
          <span>
            Managing Director at <strong>LAZERXTECH</strong>
          </span>
          <span>{description}</span>
          <span>Read More</span>
        </div>
        <div className="slider-controls">
          <div className="prev-slide" onClick={prevSlide}>
            <img height={80} width={80} src="leftslide.png" alt="Previous" />
          </div>
          {Array.from({ length: size }, (_, index) => (
            <span
              style={{
                border: index === currentIndex ? `1px solid red` : "none",
              }}
              key={index}
              className="slider-dots"
            >
              <div
                style={{
                  backgroundColor: index === currentIndex ? "red" : "#B6B6B6",
                  height: "10px",
                  width: "10px",
                  borderRadius: "100%",
                }}
              ></div>
            </span>
          ))}
          <div className="next-slide" onClick={nextSlide}>
            <img height={80} width={80} src="rightslide.png" alt="Next" />
          </div>
        </div>
      </div>
    </div>
  );
}
