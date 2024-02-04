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
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
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
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707025669/str2_gimsb5.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022",
  },
  {
    id: 3,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707025674/str3_jcfd6g.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "Teknion wins Gold at 2022 International Design Awards",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022",
  },

  {
    id: 4,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707025683/str4_zzpr5x.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "How 7 lines code turned into $36 Billion Empire",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022",
  },
  {
    id: 5,
    topic_img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707025690/str5_qokj6i.jpg",
    type: "BUSINESS",
    author_name: "Maria Doe",
    author_image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg",
    topic: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    about: "Why Branding matters for your Business",
    target: ["branding", "Communication", "Branding"],
    date: "22 january 2022",
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
