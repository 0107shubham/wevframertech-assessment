"use client";

import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoEllipseSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./index.css";

const StoriesElement = (props) => {
  const router = useRouter();
  const { article } = props;
  const { topic_img_url, topic, target, date, type, id } = article;

  return (
    <div
      className="stor-element-bg"
      style={{
        backgroundImage: `url(${topic_img_url})`,
      }}
    >
      <div className="stor-element-bg-inner">
        <div className="stor-icon-con">
          <div className="stor-eye-cont">
            <IoEyeSharp className="eye" />
            <p className="viewnum">428</p>
          </div>
          <div className="img-status-cont">
            <img
              className="statusup-icon"
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706803013/wifi2_l6ier0.png"
            />
          </div>
        </div>
        <div>
          <div>
            <p className="stor-topic">{topic}</p>
          </div>
          <div className="type-date-cont">
            <p className="stor-type">
              {type} <IoEllipseSharp className="ellipse-stor" />
            </p>
            <p className="stor-date">{date}</p>
            <button className="stor-status-btn">created</button>
          </div>
          <div className="stor-btn-dot-con">
            <button
              onClick={() => router.push(`./storiesDetails/${id}`)}
              className="stor-btn"
            >
              Visit
            </button>

            <div className="stor-dot-con">
              <BsThreeDots className="stor-dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesElement;
