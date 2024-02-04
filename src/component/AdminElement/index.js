import React from "react";
import "./index.css";

const AdminElement = (props) => {
  const { data } = props;
  const { img_url, title, number } = data;
  return (
    <div className="admin-elemnt-container">
      <img className="admin-img-logo" src={img_url} />
      <div>
        <p className="admin-title">{title}</p>
        <p className="admin-number">{number}</p>
      </div>
    </div>
  );
};

export default AdminElement;
