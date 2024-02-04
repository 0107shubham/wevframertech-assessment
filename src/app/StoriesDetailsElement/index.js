"use client";
import React, { useState } from "react";
import "./index.css";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";

const StoriesDetailsElement = (props) => {
  const { data } = props;
  const {
    id,
    author_image,
    type,
    author_name,
    topic,
    about,
    target,
    date,
    images,
  } = data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    "url_of_image_1",
    "url_of_image_2",
    "url_of_image_3",
    // Add more image URLs as needed
  ];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    console.log("Next Clicked");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="stordetails-bg-cont">
      <div className="stordetails-author-accees-cont">
        <div className="stordetails-author-cont">
          <img
            className="stordetails-author-img"
            src={author_image}
            alt="image"
          />
          <p className="stordetails-author-name">{author_name}</p>
          <p className="stordetails-date">created on {date}</p>
        </div>
        <div className="stordetails-access-dot-cont">
          <div className="stordetails-access-cont">
            <p>Accessibility</p>
            <TbTriangleInvertedFilled />
          </div>
          <div className="stor-dot-con">
            <BsThreeDots className="stor-dot" />
          </div>
        </div>
      </div>
      <div
        className="image-slider-cont"
        style={{ backgroundImage: `url("${images[currentImageIndex]}")` }}
      >
        <div className="image-slider-cont-inner">
          <button className="image-slider-btn" onClick={handlePrev}>
            {"<"}
          </button>

          <div
            className="slider-image"
            style={{ backgroundImage: `url("${images[currentImageIndex]}")` }}
          >
            <div className="stordetails-text-over-img-con">
              <p className="stordetails-topic-para">{topic}</p>
              <button className="stordetails-topic-button">Business</button>
            </div>
          </div>
          <button className="image-slider-btn" onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoriesDetailsElement;
