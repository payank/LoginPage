import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";

const useStyle = makeStyles({
  footer: {
    background: "linear-gradient(to left, #79f571, #084f03)",
    height: "20px",
    // marginTop: "auto",
  },
});

const Footer = () => {
  const classes = useStyle();
  const location = useLocation();
  if (location.pathname !== "/") {
    return null;
  }
  return (
    <AppBar position="static" elevation={0}>
      <div
        style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          color: "grey",
        }}
      >
        Rapidus Confidential
      </div>
      <div className={classes.footer}></div>
    </AppBar>
  );
};

export default Footer;
