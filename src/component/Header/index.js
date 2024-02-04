"use client";
import React, { useState } from "react";
import { MdOutlineHeadset } from "react-icons/md";

import { GiHamburgerMenu } from "react-icons/gi";

import { CiSearch } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";

const sidebarElementsMbl = [
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "Dashboard",
    count: 0,
  },
  {
    id: 2,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "Content",
    count: 0,
  },
  {
    id: 3,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "Team",
    count: 0,
  },
  {
    id: 4,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "User",
    count: 0,
  },
  {
    id: 5,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "App/Web",
    count: 0,
  },
  {
    id: 6,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "Analytics",
    count: 3,
  },
  {
    id: 7,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "Media",
    count: 16,
  },
  {
    id: 8,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "Notification",
    count: 0,
  },
  {
    id: 9,
    image_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706699708/home-2_zszf2q.png",
    name: "Settings",
    count: 0,
  },
  // ... (other elements)
];
import "./index.css";
const Header = () => {
  const [visible, setVisible] = useState(true);

  const NavbarElement = (props) => {
    const { data } = props;
    const { name, image_url, count } = data;
    return (
      <div className="NavbarElement-container">
        <img
          className="NavbarElement-container-icon"
          src={image_url}
          alt={image_url}
        />
        <p className="text-lime-800">{name}</p>
        {count > 0 ? <p className="count-notification">{count}</p> : ""}
      </div>
    );
  };

  const navDataSmall = () => {
    return (
      <div className="openNavBar">
        <img
          className="img-navbar"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706711272/cancel-close_nkzevb.svg"
          alt="Close"
          onClick={() => setVisible(!visible)}
        />
        <ul className="NavbarElement-main-con">
          <div className="user-con-header-mbl">
            <div>
              <img
                className="user-img"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706881525/userimage_ihvbh7.png"
              />
            </div>
            <div>
              <p className="welcome-text">Welcome back,</p>
              <h1 className="user-name">Akshita Patel</h1>
            </div>
            <IoChevronDownOutline className="user-chevron" />
          </div>
          {sidebarElementsMbl.map((element) => (
            <NavbarElement key={element.id} data={element} />
          ))}
          <div className="contact-support-cont-mb">
            <MdOutlineHeadset className="contact-support-icon" />
            <p className="contact-support-text">Contact Support</p>
          </div>
        </ul>
      </div>
    );
  };
  return (
    <div className="header-bg-conatiner">
      <div>
        <div className="header-inner-container-small-screen">
          {visible ? (
            <div>
              <GiHamburgerMenu
                onClick={() => setVisible(!visible)}
                className="HamburgerMenu"
              />
            </div>
          ) : (
            navDataSmall()
          )}
        </div>
      </div>
      <div className="search-container">
        <CiSearch className="search-icon" />
        <input className="search-input" placeholder="Serach" type="text" />
      </div>
      <div className="header-date-user-con">
        <div className="header-date-con">
          <input type="date" />
          <p className="date-con-para">OR</p>
          <input type="date" />
        </div>
        <div className="user-con-header">
          <div>
            <img
              className="user-img"
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706881525/userimage_ihvbh7.png"
            />
          </div>
          <div>
            <p className="welcome-text">Welcome back,</p>
            <h1 className="user-name">Akshita Patel</h1>
          </div>
          <IoChevronDownOutline className="user-chevron" />
        </div>
      </div>
    </div>
  );
};

export default Header;
