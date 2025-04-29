import React from "react";
import { Link, useLocation } from "react-router-dom";
const SidebarNav = () => {
  const location = useLocation();

  const getActiveLink = () => {
    if (location.pathname === "/rapidusHome") {
      return "home";
    } else if (location.pathname === "/rapidusCalculator") {
      return "design";
    } else {
      return "";
    }
  };

  const activeLink = getActiveLink();
  return (
    <nav className="side-nav">
      <ul>
        <div className="active">
          <img
            alt="rapidus-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-38wv8s_hOvue2DIVKf1sqwW5b5m75e-bRU2DubgOtrIVR5jVtN2vz8ggXmvj-UA_Zw&usqp=CAU"
            style={{
              width: "100%",
              height: "21px",
              objectFit: "cover",
              paddingTop: "3px",
            }}
          />
        </div>

        <Link
          to="/rapidusHome"
          style={{ textDecoration: "none", color: "black" }}
        >
          <li className={`white-box ${activeLink === "home" ? "clicked" : ""}`}>
            Home
          </li>
        </Link>

        <li className="white-box">Document</li>

        <Link
          to="/rapidusCalculator"
          style={{ textDecoration: "none", color: "black" }}
        >
          <li
            className={`white-box ${activeLink === "design" ? "clicked" : ""}`}
          >
            Design Portal
          </li>
        </Link>

        <li className="white-box">MPW (Shuttle)</li>
        <li className="white-box">Tapeout</li>
        <li className="white-box">Product Info & Instruction</li>
        <li className="white-box">Production & Logistic Report</li>
        <li className="white-box">Eng Data Analysis</li>

        <li className="white-box">Quality & Reliability</li>
        <li className="white-box">Customer Service</li>
        <li className="white-box">SETTING</li>
        <li className="white-box">Administration</li>
      </ul>
    </nav>
  );
};
export default SidebarNav;
