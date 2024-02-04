import React from "react";
import "./index.css";
import AdminElement from "../AdminElement";

const AdminData = [
  {
    id: 1,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706811844/contact_f7cyxl.png",
    title: "Articles",
    number: "4,950 New Updates",
  },
  {
    id: 2,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706811844/contact_f7cyxl.png",
    title: "Articles",
    number: "4,950 New Updates",
  },
  {
    id: 3,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706811844/contact_f7cyxl.png",
    title: "Articles",
    number: "4,950 New Updates",
  },
  {
    id: 4,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706811844/contact_f7cyxl.png",
    title: "Articles",
    number: "4,950 New Updates",
  },
  {
    id: 4,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706811844/contact_f7cyxl.png",
    title: "Articles",
    number: "4,950 New Updates",
  },
  {
    id: 4,
    img_url:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1706811844/contact_f7cyxl.png",
    title: "Articles",
    number: "4,950 New Updates",
  },
];

const Admin = () => {
  return (
    <div className="Admin-bg-Container">
      <h1 className="Admin-heading">Hello Admin,</h1>
      <p className="Admin-para">This is what we got you for today.</p>
      <div className="admin-element-cont">
        {AdminData.map((item) => (
          <AdminElement key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
