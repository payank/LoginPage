import React from "react";
import whitelogo from "../Assets/Images/WhiteLogo.jpg";
import userphoto from "../Assets/Images/UserPhoto.svg";
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
import { FormattedMessage } from "react-intl";

const SidebarNav = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

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

  const navItems = [
    {
      to: "/rapidusHome",
      icon: <DashboardIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.whatsNew",
      defaultMessage: "What's New",
      activeKey: "home",
    },
    {
      to: "/rapidusDocument",
      icon: <InsertDriveFileIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.document",
      defaultMessage: "Document",
      activeKey: "document",
    },
    {
      to: "/rapidusCalculator",
      icon: <DashboardCustomizeIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "common.designPortal",
      defaultMessage: "Design Portal",
      activeKey: "design",
    },
    {
      icon: <DirectionsBusIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.mpwShuttle",
      defaultMessage: "MPW (Shuttle)",
    },
    {
      icon: <Inventory2Icon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.tapeout",
      defaultMessage: "Tapeout",
    },
    {
      icon: <LayersIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.productInfo",
      defaultMessage: "Product Info & Instruction",
    },
    {
      icon: <AssignmentIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.productionLogistics",
      defaultMessage: "Production & Logistic Report",
    },
    {
      icon: <PieChartIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.engDataAnalysis",
      defaultMessage: "Eng Data Analysis",
    },
    {
      icon: <BarChartIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.qualityReliability",
      defaultMessage: "Quality & Reliability",
    },
    {
      icon: <PeopleIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.customerService",
      defaultMessage: "Customer Service",
    },
    {
      icon: <SettingsIcon style={{ color: "white", fontSize: "16px", marginTop: "3px" }} />,
      id: "sidebar.settings",
      defaultMessage: "Settings",
    },
  ];

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
        <br />
        <br />
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to || "#"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li
              className={`white-box ${activeLink === item.activeKey ? "clicked" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginTop: "-20px",
              }}
            >
              <IconBox icon={item.icon} />
              <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
            </li>
          </Link>
        ))}

        <li
          className="white-box"
          style={{
            display: "flex",
            color: "white",
            alignItems: "center",
          }}
        >
          <img alt="user-photo" src={userphoto} />
          <div style={{ marginLeft: "8px" }}>
            <div>
              <FormattedMessage id="sidebar.userName" defaultMessage="User Name" />
            </div>
            <div style={{ fontSize: "10px", opacity: 0.8 }}>
              <FormattedMessage id="sidebar.designation" defaultMessage="Designation" />
            </div>
          </div>
        </li>

        <li
          className="white-box"
          style={{
            display: "flex",
            color: "white",
            alignItems: "center",
            marginTop: "-18px",
          }}
          onClick={handleLogout}
        >
          <IconBox
            icon={
              <PowerSettingsNewIcon
                style={{
                  color: "white",
                  fontSize: "16px",
                  marginTop: "3px",
                }}
              />
            }
          />
          <FormattedMessage id="sidebar.logout" defaultMessage="Logout" />
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;