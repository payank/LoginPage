import React, { useState } from "react";
import { FormattedMessage } from "react-intl"; // Import FormattedMessage
import "./style.css";
import arrow from "../Assets/Images/Arrow.svg";
import SearchbarNav from "./SearchbarNav";
import Chatbot from "./Chatbot";
import SidebarNav from "./SidebarNav";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ChatIcon from "@mui/icons-material/Chat";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import NatureIcon from "@mui/icons-material/Nature";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Form } from "react-final-form";

const RapidusHome = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleIconClick = () => {
    setIsChatOpen(true);
  };
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

              <h3 style={{ paddingTop: "10px" }}>
                <FormattedMessage id="whatsNew" defaultMessage="What's New" />
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginRight: "100px",
                }}
              >
                <button
                  onClick={() => { }}
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "500",
                    paddingRight: "12px",
                  }}
                >
                  <FormattedMessage id="more" defaultMessage="More" />
                </button>
                <div
                  style={{
                    marginRight: '-73px',
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    paddingBottom: "4px",
                  }}
                >
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                      alt="lock icon"
                      style={{ width: "16px", height: "16px", paddingRight: '5px' }}
                    />
                    <span style={{ fontWeight: 500 }}>
                      <FormattedMessage
                        id="privilegeDocumentReport"
                        defaultMessage="Privilege Document Report"
                      />
                    </span>
                  </div>
                  <span> <InsertDriveFileOutlinedIcon /> </span>
                  <span> <TrendingUpIcon /> </span>
                </div>
              </div>
            </div>

            <div className="box-container">
              <div className="first">
                <div className="content">
                  01
                  <h3><FormattedMessage
                    id="featuredContentName"
                    defaultMessage="Featured Content Name"
                  /></h3>
                  <p>
                    <FormattedMessage
                      id="featuredContentDescription"
                      defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <button
                      onClick={()=> {}}
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      <strong><FormattedMessage
                        id="learnMore"
                        defaultMessage="Learn more"
                      /></strong>
                    </button>
                  </p>
                </div>
              </div>
              <div className="second">
                <div className="content">
                  <strong>
                    <FormattedMessage id="updates" defaultMessage="Updates" />
                  </strong>
                  <p style={{ paddingTop: "-10px" }}>
                    <FormattedMessage
                      id="updatesDescription"
                      defaultMessage="Rapidus Customer Portal will be unavailable from 2025/4/1, 3:00pm to 5:00pm"
                    />
                  </p>
                  <div style={{ marginTop: "3px" }}>
                    <button className="red">
                      <FormattedMessage id="notice" defaultMessage="Notice" />

                    </button>
                    <span
                      style={{
                        color: "grey",
                        float: "right",
                        marginRight: "5px",
                      }}
                    >
                      <FormattedMessage
                        id="updateDate"
                        defaultMessage="2025/2/1"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="third">
                <div className="content">
                  <strong> <FormattedMessage
                    id="onlineNotifications"
                    defaultMessage="Online Notifications"
                  /></strong>

                  <p style={{ paddingTop: "-10px" }}>
                    8                    <FormattedMessage
                      id="onlineNotificationsDescription"
                      defaultMessage="Rapidus Customer Portal will be unavailable from 2026/4/1 3:00 to ..."
                    />
                  </p>

                  <div style={{ color: "grey" }}>
                    <FormattedMessage
                      id="notificationDate"
                      defaultMessage="2025/2/1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 style={{ marginLeft: "22px", marginTop: "20px" }}>
              <FormattedMessage
                id="favouriteFunction"
                defaultMessage="Favourite Function"
              />
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
                  <strong><FormattedMessage
                    id="documentAAA"
                    defaultMessage="Document AAA"
                  /></strong>
                  <br />
                  <span style={{ color: "grey" }}><FormattedMessage
                    id="document"
                    defaultMessage="Document"
                  /></span>
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
                  <strong><FormattedMessage id="content.name" defaultMessage="Content Name" /></strong>
                  <br />
                  <span style={{ color: "grey" }}><FormattedMessage id="common.designPortal" defaultMessage="Design Portal" /></span>
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
                  <strong><FormattedMessage id="content.name" defaultMessage="Content Name" /></strong>
                  <br />
                  <span style={{ color: "grey" }}><FormattedMessage id="sidebar.mpwShuttle" defaultMessage="MPW (Shuttle)" /></span>
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
                  <strong><FormattedMessage id="content.name" defaultMessage="Content Name" /></strong>
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
                  <strong><FormattedMessage id="content.name" defaultMessage="Content Name" /></strong>
                  <br />
                  <span style={{ color: "grey" }}><FormattedMessage id="common.designPortal" defaultMessage="Design Portal" /></span>
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
              <h3><FormattedMessage id="youMightAlsoLike" defaultMessage="You might also like" /></h3>
              <h3 style={{ marginRight: "90px" }}><FormattedMessage id="informationCenter" defaultMessage="Information Center"  /></h3>
            </div>

            <div className="third-container">
              <div className="a">
                <div className="newcontent">
                  <span><FormattedMessage id="newTapeoutProcedure" defaultMessage="Rapidus new tapeout procedure"/></span>
                  <img alt="arrow" src={arrow} className="arrow-icon" />
                </div>
              </div>
              <div className="b">
                <div className="newcontent">
                  <span> <FormattedMessage id="queryLotHandlingRequest" defaultMessage="Query Lot Handling Request"/></span>
                  <img alt="arrow" src={arrow} className="arrow-icon" />
                </div>
              </div>
              <div className="c">
                <div className="newcontent">
                  <span><FormattedMessage id="customerDeliverySchedule" defaultMessage="Customer Delivery Schedule"/></span>
                  <img alt="arrow" src={arrow} className="arrow-icon" />
                </div>
              </div>
              <div className="d">
                <div className="newcontent">
                  <span><FormattedMessage id="designGuidelineCalibration" defaultMessage="Design Guideline & Calibration"/></span>
                  <img alt="arrow" src={arrow} className="arrow-icon" />
                </div>
              </div>
            </div>

            <h3 style={{ marginLeft: "22px", marginTop: "13px" }}>
              <FormattedMessage id="tapeoutDashboard" defaultMessage="Tapeout Dashboard"/>
            </h3>

            <div className="wrapper" style={{ display: "flex" }}>
              <div className="fourth-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th> <FormattedMessage id="mtSubmission" defaultMessage="MT Submission"/></th>
                      <th> <FormattedMessage id="maskRelease" defaultMessage="Mask Release for Jobview TransID."/></th>
                      <th><FormattedMessage id="jvStatus" defaultMessage="JV Status"/></th>
                      <th><FormattedMessage id="firstMaskStatus" defaultMessage="1st Mask Status"/></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ABC1234-001</td>
                      <td>AAAA11111111</td>
                      <td><FormattedMessage id="waitForCustReview" defaultMessage="Wait for Cust. Review" /></td>
                      <td>
                        <span className="status-badge"><FormattedMessage id="notAvailable" defaultMessage="Not Available"/></span>
                      </td>
                    </tr>
                    <tr>
                      <td>ABC1234-001</td>
                      <td>AAAA11111111</td>
                      <td><FormattedMessage id="waitForCustReview" defaultMessage="Wait for Cust. Review" /></td>
                      <td>
                        <span className="status-badge"><FormattedMessage id="notAvailable" defaultMessage="Not Available"/></span>
                      </td>
                    </tr>
                    <tr>
                      <td>ABC1234-001</td>
                      <td>AAAA11111111</td>
                      <td><FormattedMessage id="waitForCustReview" defaultMessage="Wait for Cust. Review" /></td>
                      <td>
                        <span className="status-badge"><FormattedMessage id="notAvailable" defaultMessage="Not Available"/></span>
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
                        <AppsOutlinedIcon
                          style={{fontSize: "16px" }}
                        />
                      }
                    />
                    <div>
                      <strong><FormattedMessage id="serviceOverview" defaultMessage="Service Overview"/></strong>
                      <br />
                      <small><FormattedMessage id="relatedTextToHeading" defaultMessage="Related text to Heading" /></small>
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
                      <strong><FormattedMessage id="videos" defaultMessage="Videos"/></strong>
                      <br />
                      <small><FormattedMessage id="relatedTextToHeading" defaultMessage="Related text to Heading" /></small>
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
                      <strong><FormattedMessage id="helpCenter" defaultMessage="Help Center"/></strong>
                      <br />
                      <small><FormattedMessage id="relatedTextToHeading" defaultMessage="Related text to Heading" /></small>
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
                      <strong><FormattedMessage id="eshConflictMinerals" defaultMessage="ESH & Conflict Minerals"/></strong>
                      <br />
                      <small><FormattedMessage id="relatedTextToHeading" defaultMessage="Related text to Heading" /></small>
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
                      <strong><FormattedMessage id="esgAtRapidus" defaultMessage="ESG at Rapidus"/></strong>
                      <br />
                      <small><FormattedMessage id="relatedTextToHeading" defaultMessage="Related text to Heading" /></small>
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
                      <strong><FormattedMessage id="rapidusCalendars" defaultMessage="Rapidus Calendars"/></strong>
                      <br />
                      <small><FormattedMessage id="relatedTextToHeading" defaultMessage="Related text to Heading" /></small>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                onClick={handleIconClick}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "green",
                  display: "flex",
                  position: "fixed",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  bottom: "25px",
                  right:'0px'
                }}
              >
                <ChatIcon />
              </div>
              {isChatOpen && <Chatbot />}
              {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RapidusHome;
