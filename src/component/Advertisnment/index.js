import React from "react";
import "./index.css";
import AdvertisnmentElement from "../AdvetisnmentElement";
const advertisnmentData = [
  {
    id: 1,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706780251/shopify2_yruk1j.png",
    name: "Build your business",
    about:
      "Shopify has all the tools you need to start, sell, market, and manage.",
  },
  {
    id: 2,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706780251/shopify2_yruk1j.png",
    name: "Build your business",
    about:
      "Shopify has all the tools you need to start, sell, market, and manage.",
  },
  {
    id: 3,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706780251/shopify2_yruk1j.png",
    name: "Build your business",
    about:
      "Shopify has all the tools you need to start, sell, market, and manage.",
  },
  {
    id: 4,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706780251/shopify2_yruk1j.png",
    name: "Build your business",
    about:
      "Shopify has all the tools you need to start, sell, market, and manage.",
  },
  {
    id: 5,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706780251/shopify2_yruk1j.png",
    name: "Build your business",
    about:
      "Shopify has all the tools you need to start, sell, market, and manage.",
  },
];
const Advertisnment = () => {
  return (
    <div className="Advertisnment-bg-container">
      <div className="text-heading-seeall">
        <p className="heading">Advertisment</p>
        <p className="see-all">See all</p>
      </div>
      <div className="advertisnment-item-container">
        {advertisnmentData.map((item) => (
          <AdvertisnmentElement key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Advertisnment;
