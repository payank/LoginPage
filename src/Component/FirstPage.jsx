import React from "react";
import "./style.css";
import arrow from "../Assets/Images/Arrow.svg";
import SearchbarNav from "./SearchbarNav";
import SidebarNav from "./SidebarNav";
import ChatIcon from "@mui/icons-material/Chat";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import NatureIcon from "@mui/icons-material/Nature";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { colors } from "@mui/material";

const RapidusHome = () => {
  const IconBox = ({ icon }) => (
    <div
      style={{
        width: "30px",
        height: "30px",
        marginTop: "1px",
        backgroundColor: "#dcdcdc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        padding: "4px",
        marginRight: "10px",
      }}
    >
      {icon}
    </div>
  );
  return (
    <div className="rapidus-container">
      <div className="rapidus-main">
        <SidebarNav />

        <main className="content-area">
          <SearchbarNav />
          <div className="grey">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 22px",
                marginTop: "20px",
              }}
            >
              <h3 style={{ paddingTop: "10px" }}>What's New</h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginRight: "100px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "500",
                    paddingRight: "12px",
                  }}
                >
                  More
                </a>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingBottom: "4px",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                    alt="lock icon"
                    style={{ width: "16px", height: "16px" }}
                  />
                  <span style={{ fontWeight: 500 }}>
                    Privilege Document Report
                  </span>
                </div>
              </div>
            </div>

            <div className="box-container">
              <div className="first">
                <div className="content">
                  01
                  <h3>Featured Content Name</h3>
                  <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <a
                      href="https://your-link-here.com"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      <strong>Learn more</strong>
                    </a>
                  </text>
                </div>
              </div>
              <div className="second">
                <div className="content">
                  <strong> Updates</strong>
                  <p style={{ paddingTop: "-10px" }}>
                    Rapidus Customer Portal will be unavailable from 2025/4/1,
                    3:00pm to 5:00pm
                  </p>
                  <div style={{ marginTop: "3px" }}>
                    <button className="red">Notice</button>
                    <span
                      style={{
                        color: "grey",
                        float: "right",
                        marginRight: "5px",
                      }}
                    >
                      2025/2/1
                    </span>
                  </div>
                </div>
              </div>

              <div className="third">
                <div className="content">
                  <strong> Online Notifications</strong>

                  <p style={{ paddingTop: "-10px" }}>
                    Rapidus Customer Portal will be unavailable from 2026/4/1
                    3:00 to ...
                  </p>

                  <div style={{ color: "grey" }}>2025/2/1</div>
                </div>
              </div>
            </div>

            <h3 style={{ marginLeft: "22px", marginTop: "20px" }}>
              Favourite Function
            </h3>
            <div className="second-container">
              <div className="one">
                <div className="icon-medium">
                  <IconBox
                    icon={
                      <InsertDriveFileIcon
                        style={{ color: "black", fontSize: "16px" }}
                      />
                    }
                  />
                </div>
                <div className="text">
                  <strong>Document AAA</strong>
                  <br />
                  <span style={{ color: "grey" }}>Document</span>
                </div>
              </div>
              <div className="two">
                <div className="icon-medium">
                  <IconBox
                    icon={
                      <InsertDriveFileIcon
                        style={{ color: "black", fontSize: "16px" }}
                      />
                    }
                  />
                </div>
                <div className="text">
                  <strong>Document BBB</strong>
                  <br />
                  <span style={{ color: "grey" }}>Document</span>
                </div>
              </div>
              <div className="three">
                <div className="icon-medium">
                  <IconBox
                    icon={
                      <DashboardCustomizeIcon
                        style={{ color: "black", fontSize: "16px" }}
                      />
                    }
                  />
                </div>
                <div className="text">
                  <strong>Content Name</strong>
                  <br />
                  <span style={{ color: "grey" }}>Design Portal</span>
                </div>
              </div>
              <div className="four">
                <div className="icon-medium">
                  <IconBox
                    icon={
                      <DirectionsBusIcon
                        style={{ color: "black", fontSize: "16px" }}
                      />
                    }
                  />
                </div>
                <div className="text">
                  <strong>Content Name</strong>
                  <br />
                  <span style={{ color: "grey" }}>MPW(Shuttle)</span>
                </div>
              </div>
              <div className="five">
                <div className="icon-medium">
                  <IconBox
                    icon={
                      <Inventory2Icon
                        style={{ color: "black", fontSize: "16px" }}
                      />
                    }
                  />
                </div>
                <div className="text">
                  <strong>Content Name</strong>
                  <br />
                  <span style={{ color: "grey" }}>Tapeout</span>
                </div>
              </div>
              <div className="six">
                <div className="icon-medium">
                  <IconBox
                    icon={
                      <DashboardCustomizeIcon
                        style={{ color: "black", fontSize: "16px" }}
                      />
                    }
                  />
                </div>
                <div className="text">
                  <strong>Content Name</strong>
                  <br />
                  <span style={{ color: "grey" }}>Design Portal</span>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "-16px",
              }}
            >
              <h3>You might also like</h3>
              <h3 style={{ marginRight: "90px" }}>Information Center</h3>
            </div>

            <div className="third-container">
              <div className="a">
                <div className="newcontent">
                  <span>Rapidus new tapeout proced...</span>
                  <img alt="arrow" src={arrow} className="arrow-icon" />
                </div>
              </div>
              <div className="b">
                <div className="newcontent">
                  <span>Query Lot Handling Request</span>
                  <img alt="arrow" src={arrow} className="arrow-icon" />
                </div>
              </div>
              <div className="c">
                <div className="newcontent">
                  <span>Customer Delivery Schedule</span>
                  <img alt="arrow" src={arrow} className="arrow-icon" />
                </div>
              </div>
              <div className="d">
                <div className="newcontent">
                  <span>Design Guideline & Calibration</span>
                  <img alt="arrow" src={arrow} className="arrow-icon" />
                </div>
              </div>
            </div>

            <h3 style={{ marginLeft: "22px", marginTop: "13px" }}>
              Tapeout Dashboard
            </h3>

            <div className="wrapper" style={{ display: "flex" }}>
              <div className="fourth-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>MT Submission</th>
                      <th>Mask Release for Jobview TransID.</th>
                      <th>JV Status</th>
                      <th>1st Mask Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ABC1234-001</td>
                      <td>AAAA11111111</td>
                      <td>Wait for Cust. Review</td>
                      <td>
                        <span className="status-badge">Not Available</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ABC1234-001</td>
                      <td>AAAA11111111</td>
                      <td>Wait for Cust. Review</td>
                      <td>
                        <span className="status-badge">Not Available</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ABC1234-001</td>
                      <td>AAAA11111111</td>
                      <td>Wait for Cust. Review</td>
                      <td>
                        <span className="status-badge">Not Available</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="information-center"
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "12px",
                  width: "280px",
                  height: "424px",
                  marginTop: "-185px",
                  paddingLeft: '10px',
                  
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "28px",
                    }}
                  >
                    <IconBox
                      icon={
                        <DashboardIcon
                          style={{ color: "black", fontSize: "16px" }}
                        />
                      }
                    />
                    <div>
                      <strong>Service Overview</strong>
                      <br />
                      <small>Related text to Heading</small>
                    </div>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "28px",
                    }}
                  >
                    <IconBox
                      icon={
                        <PlayCircleOutlineIcon
                          style={{ color: "black", fontSize: "16px" }}
                        />
                      }
                    />
                    <div>
                      <strong>Videos</strong>
                      <br />
                      <small>Related text to Heading</small>
                    </div>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "28px",
                    }}
                  >
                    <IconBox
                      icon={
                        <HelpOutlineIcon
                          style={{ color: "black", fontSize: "16px" }}
                        />
                      }
                    />
                    <div>
                      <strong>Help Center</strong>
                      <br />
                      <small>Related text to Heading</small>
                    </div>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "28px",
                    }}
                  >
                    <IconBox
                      icon={
                        <DescriptionIcon
                          style={{ color: "black", fontSize: "16px" }}
                        />
                      }
                    />
                    <div>
                      <strong>ESH & Conflict Minerals</strong>
                      <br />
                      <small>Related text to Heading</small>
                    </div>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "28px",
                    }}
                  >
                    <IconBox
                      icon={
                        <NatureIcon
                          style={{ color: "black", fontSize: "16px" }}
                        />
                      }
                    />
                    <div>
                      <strong>ESG at Rapidus</strong>
                      <br />
                      <small>Related text to Heading</small>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <IconBox
                      icon={
                        <CalendarTodayIcon
                          style={{ color: "black", fontSize: "16px" }}
                        />
                      }
                    />
                    <div>
                      <strong>Rapidus Calendars</strong>
                      <br />
                      <small>Related text to Heading</small>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "green",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  marginTop: "270px",
                }}
              >
                <ChatIcon />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RapidusHome;
