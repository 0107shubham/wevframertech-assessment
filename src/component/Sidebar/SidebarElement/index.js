import React from "react";
import "./index.css";
const SidebarElement = (props) => {
  const { data } = props;
  const { name, image_url, count } = data;
  return (
    <div className="SidebarElement-container">
      <img
        className="SidebarElement-container-icon"
        src={image_url}
        alt={image_url}
      />
      <p className="text-lime-800">{name}</p>
      {count > 0 ? <p className="count-notification">{count}</p> : ""}
    </div>
  );
};

export default SidebarElement;
