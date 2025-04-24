import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  footer: {
    background: "linear-gradient(to left, #79f571, #084f03)",
    height: "20px",
    // marginTop: "auto",
  },
});

const Footer = () => {
  const classes = useStyle();
  return (
    <AppBar position="static"  elevation={0}>
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
