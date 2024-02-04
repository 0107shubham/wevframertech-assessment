import React from "react";
import "./index.css";
import ArticleElement from "../ArticleElement";

const ArticleData = [
  {
    id: 1,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706722987/article1_ciaqob.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706796679/auth2_owyahp.png",
    topic: "7 Rules of Effective Branding",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022", // Add the date property with the current date
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

const Article = () => {
  return (
    <div className="Article-bg-container">
      <div className="text-heading-seeall">
        <p className="heading">Top Articles</p>
        <p className="see-all">See all</p>
      </div>
      <div className="article-elemnt">
        {ArticleData.map((article) => (
          <ArticleElement key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Article;
