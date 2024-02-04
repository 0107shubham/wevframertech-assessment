import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "./index.css";
const AdvertisnmentElement = (props) => {
  const { data } = props;
  const { img_url, name, about } = data;

  return (
    <div className="advertisnment-element-container">
      <div className="img-con-ad">
        <img className="img-ad" src={img_url} alt={name} />
      </div>
      <div className="text-ad-con">
        <p className="ad-ele-name">{name}</p>
        <p className="ad-ele-about">{about}</p>
        <div className="btn-dot-con">
          <button className="ad-btn">Visit</button>
          <div className="dot-con">
            <BsThreeDots className="ad-dot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisnmentElement;
