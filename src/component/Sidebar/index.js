"use client";
import React, { useState } from "react";
import { MdOutlineHeadset } from "react-icons/md";
import SidebarElement from "./SidebarElement";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";

const sidebarElements = [
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

const Sidebar = () => {
  const [visible, setVisible] = useState(true);
  const navDataSmall = () => {
    return (
      <div className="openNavBar">
        <img
          className="img-navbar"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706711272/cancel-close_nkzevb.svg"
          alt="Close"
          onClick={() => setVisible(!visible)}
        />
        <ul className="">
          {sidebarElements.map((element) => (
            <SidebarElement key={element.id} data={element} />
          ))}
        </ul>
        <div className="contact-support-cont">
          <MdOutlineHeadset className="contact-support-icon" />
          <p className="contact-support-text">Contact Support</p>
        </div>
      </div>
    );
  };

  return (
    <div className="sidebar-bg-container">
      <ul className="sidebar-inner-container-big-screen">
        {sidebarElements.map((element) => (
          <SidebarElement key={element.id} data={element} />
        ))}

        <div className="contact-support-cont">
          <MdOutlineHeadset className="contact-support-icon" />
          <p className="contact-support-text">Contact Support</p>
        </div>
      </ul>

      <div className="sidebar-inner-container-small-screen">
        {visible ? (
          <div className="closedNavbar-cont">
            <GiHamburgerMenu
              onClick={() => setVisible(!visible)}
              className="closedNavbar"
            />
          </div>
        ) : (
          navDataSmall()
        )}
      </div>
    </div>
  );
};

export default Sidebar;
