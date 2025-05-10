import React from "react";
import whitelogo from '../Assets/Images/WhiteLogo.jpg';
import userphoto from '../Assets/Images/UserPhoto.svg';
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PieChartIcon from "@mui/icons-material/PieChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const SidebarNav = () => {
  const IconBox = ({ icon }) => (
    <div
      style={{
        width: "20px",
        height: "20px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        padding: "4px",
      }}
    >
      {icon}
    </div>
  );
  const location = useLocation();

  const getActiveLink = () => {
    if (location.pathname === "/rapidusHome") {
      return "home";
    } else if (location.pathname === "/rapidusCalculator") {
      return "design";
    } else if (location.pathname === "/rapidusDocument") {
      return "document";
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
           src={whitelogo} 
            style={{
              width: "100%",
              height: "21px",
              objectFit: "cover",
              paddingTop: "3px",
            }}
          />
        </div>
        <br></br>
        <Link
          to="/rapidusHome"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li
            className={`white-box ${activeLink === "home" ? "clicked" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <IconBox
              icon={
                <DashboardIcon style={{ color: "white", fontSize: "16px", marginTop: "2px" }} />
              }
            />
            What's New
          </li>
        </Link>

        <Link
          to="/rapidusDocument"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li
            className={`white-box ${
              activeLink === "document" ? "clicked" : ""
            }`}
            style={{
              display: "flex",
              
              color: "white",
            }}
          >
            <IconBox
              icon={
                <InsertDriveFileIcon
                  style={{ color: "white", fontSize: "16px" ,marginTop: "-6px"}}
                />
              }
            />
            Document
          </li>
        </Link>

        <Link
          to="/rapidusCalculator"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li
            className={`white-box ${activeLink === "design" ? "clicked" : ""}`}
            style={{
              display: "flex",
              
              color: "white",
            }}
          >
            <IconBox
              icon={
                <DashboardCustomizeIcon
                  style={{ color: "white", fontSize: "16px" ,marginTop: "-6px"}}
                />
              }
            />
            Design Portal
          </li>
        </Link>

        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={
              <DirectionsBusIcon style={{ color: "white", fontSize: "16px",marginTop: "-6px" }} />
            }
          />
          MPW (Shuttle)
        </li>
        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={
              <Inventory2Icon style={{ color: "white", fontSize: "16px",marginTop: "-6px" }} />
            }
          />
          Tapeout
        </li>
        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={<LayersIcon style={{ color: "white", fontSize: "16px",marginTop: "-6px" }} />}
          />
          Product Info & Instruction
        </li>
        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={
              <AssignmentIcon style={{ color: "white", fontSize: "16px",marginTop: "-6px" }} />
            }
          />
          Production & Logistic Report
        </li>
        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={<PieChartIcon style={{ color: "white", fontSize: "16px",marginTop: "-6px" }} />}
          />
          Eng Data Analysis
        </li>

        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={<BarChartIcon style={{ color: "white", fontSize: "16px",marginTop: "-6px" }} />}
          />
          Quality & Reliability
        </li>
        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={<PeopleIcon style={{ color: "white", fontSize: "16px",marginTop: "-6px" }} />}
          />
          Customer Service
        </li>
        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={<SettingsIcon style={{ color: "white", fontSize: "16px",marginTop: "-6px" }} />}
          />
          Settings
        </li>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
        

        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
           <img
            alt="rapidus-logo"
           src={userphoto} 
           
          />
            <div style={{ marginLeft: '8px' }}>
        <div> User name</div>
        <div style={{ fontSize: '10px', opacity: 0.8 }}>Designation</div>
      </div>
          
        </li>

        <li
          className="white-box"
          style={{
            display: "flex",
            
            color: "white",
          }}
        >
          <IconBox
            icon={
              <PowerSettingsNewIcon
                style={{ color: "white", fontSize: "16px",marginTop: "-6px" }}
              />
            }
          />
          Logout
        </li>
      </ul>
    </nav>
  );
};
export default SidebarNav;
