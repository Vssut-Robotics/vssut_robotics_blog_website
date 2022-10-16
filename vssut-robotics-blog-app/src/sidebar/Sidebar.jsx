import React from "react";
import "./Sidebar.css";

const sidebar = () => {
  return (
    <div className="side">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://th.bing.com/th/id/OIP.poB1C70nvGVjBWc6yYXFTAHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7"
          alt="logo"
        />
        <h1>Robotics Society</h1>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Acheivements</li>
          <li className="sidebarListItem">Works</li>
          <li className="sidebarListItem">Dark Theme</li>
          <li className="sidebarListItem">About</li>
          <li className="sidebarListItem">Members</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
