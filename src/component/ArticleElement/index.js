import React from "react";
import "./index.css";
import { BsThreeDots } from "react-icons/bs";
import { IoEllipseSharp } from "react-icons/io5";

const TargetItem = ({ data }) => <p className="TargetItem">{data}</p>;

const ArticleElement = (props) => {
  const { article } = props;
  const {
    topic_img_url,
    type,
    author_name,
    author_image,
    topic,
    about,
    target,
    date,
  } = article;

  return (
    <div className="article-elemnt-bg">
      <div>
        <img className="art-img-cont" src={topic_img_url} alt="Topic" />
      </div>
      <div className="art-type-auth-cont">
        <div className="art-type-date-conat">
          <p className="art-type">{type}</p>
          <p className="art-date">
            <IoEllipseSharp /> {date}
          </p>
        </div>
        <div className="art-type-auth-cont-autimg">
          <img className="aur-img" src={author_image} alt="Author" />
          <p>{author_name}</p>
        </div>
      </div>
      <div className="art-name-status-cont">
        <p className="topis-art">{topic}</p>
        <button className="status-btn">created</button>
      </div>
      <div className="art-about-cont">
        <p className="about-art">{about}</p>
      </div>
      <div className="art-target-cont">
        {target.map((item, index) => (
          <TargetItem key={index} data={item} />
        ))}
      </div>
      <div className="art-btn-dot-con">
        <button className="art-btn">Visit</button>
        <div className="art-dot-con">
          <BsThreeDots className="art-dot" />
        </div>
      </div>
    </div>
  );
};

export default ArticleElement;
