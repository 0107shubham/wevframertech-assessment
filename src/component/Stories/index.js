import React from "react";
import "./index.css";
import StoriesElement from "../StoriesElement";

const ArticleData = [
  {
    id: 1,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722993/articleAuthor_xllckf.jpg",
    topic: "How 7 lines code turned into $36 Billion Empire",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022",
    images: [
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706797508/empire_hjhcv8.jpg",
    ],
  },
  {
    id: 2,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722987/article1_ciaqob.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722993/articleAuthor_xllckf.jpg",
    topic: "7 Rules of Effective Branding",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022", // Add the date property with the current date
  },
  {
    id: 3,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722987/article1_ciaqob.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722993/articleAuthor_xllckf.jpg",
    topic: "7 Rules of Effective Branding",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022", // Add the date property with the current date
  },

  {
    id: 4,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722987/article1_ciaqob.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722993/articleAuthor_xllckf.jpg",
    topic: "7 Rules of Effective Branding",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022", // Add the date property with the current date
  },
  {
    id: 5,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722987/article1_ciaqob.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722993/articleAuthor_xllckf.jpg",
    topic: "7 Rules of Effective Branding",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022", // Add the date property with the current date
  },
];

const Stories = () => {
  return (
    <div className="Article-bg-container">
      <div className="text-heading-seeall">
        <p className="heading">Top Stories</p>
        <p className="see-all">See all</p>
      </div>
      <div className="article-elemnt">
        {ArticleData.map((article) => (
          <StoriesElement key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
