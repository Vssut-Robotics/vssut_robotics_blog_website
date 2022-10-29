import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import "./TopBar.css";

const Topbar = () => {
  //const user = true;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className=" topIcon fa-brands fa-facebook"></i>
          <i className=" topIcon fa-brands fa-twitter"></i>
          <i className=" topIcon fa-brands fa-pinterest"></i>
          <i className=" topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/settings" className="link">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/post" className="link">
                WRITE
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGOUT
              </Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImage"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <i className=" topSearchIcon fas fa-search"></i>
        </div>
      </div>
      <HomePage />
    </>
  );
};

export default Topbar;
