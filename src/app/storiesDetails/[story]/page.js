"use client";
import React from "react";
import Header from "../../../component/Header";
import Sidebar from "../../../component/Sidebar";
import Link from "next/link";
import StoriesDetailsElement from "../../StoriesDetailsElement";
import "./page.css";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const ArticleData = [
  {
    id: 1,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
    type: "BUSINESS",
    author_name: "John Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "How 7 lines code turned into $36 Billion Empire",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 January 2022",
    images: [
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1705925084/pexels-mister-mister-3434523_otr9xc.jpg",
    ],
  },
  {
    id: 2,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
    type: "TECHNOLOGY",
    author_name: "Jane Smith",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "7 Rules of Effective Branding",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "23 January 2022",
    images: [
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1705925084/pexels-mister-mister-3434523_otr9xc.jpg",
    ],
  },

  {
    id: 3,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
    type: "SCIENCE",
    author_name: "Alice Johnson",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "The Future of Artificial Intelligence",
    about: "Exploring the advancements in AI technology",
    target: ["AI", "Technology", "Innovation"],
    date: "24 January 2022",
    images: [
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1705925084/pexels-mister-mister-3434523_otr9xc.jpg",
    ],
  },
  {
    id: 4,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
    type: "HEALTH",
    author_name: "Robert Brown",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "Healthy Living Tips",
    about: "Promoting a balanced lifestyle and well-being",
    target: ["Health", "Wellness", "Lifestyle"],
    date: "25 January 2022",
    images: [
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1705925084/pexels-mister-mister-3434523_otr9xc.jpg",
    ],
  },
  {
    id: 5,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
    type: "ENTERTAINMENT",
    author_name: "Emily Davis",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "Behind the Scenes of a Blockbuster Movie",
    about: "An insider look into the making of a hit film",
    target: ["Entertainment", "Film", "Hollywood"],
    date: "26 January 2022",
    images: [
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1705925084/pexels-mister-mister-3434523_otr9xc.jpg",
    ],
  },
];

const storiesDetails = (params) => {
  const { story } = params.params;
  console.log(story);

  const itemData = ArticleData.find((item) => item.id === parseInt(story, 10));

  return (
    <div className="storiesDetails-bg-con">
      <div className="storiesdeatils-header">
        <div className="back-button-cont">
          <Link href="/">
            <FaArrowLeft className="back-button-icon" />
          </Link>
          <Link href="/">
            <p className="back-button-text">Stories</p>
          </Link>
        </div>
        <div className="user-con-header-storiesDetails">
          <div>
            <img
              className="user-img-storiesDetails"
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706881525/userimage_ihvbh7.png"
              alt="image"
            />
          </div>
          <div>
            <p className="welcome-text-storiesDetails">Welcome back,</p>
            <h1 className="user-name-storiesDetails">Akshita Patel</h1>
          </div>
          <IoChevronDownOutline className="user-chevron-storiesDetails" />
        </div>
      </div>

      <StoriesDetailsElement data={itemData} />
    </div>
  );
};

export default storiesDetails;
