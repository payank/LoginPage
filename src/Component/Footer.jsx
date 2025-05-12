import { AppBar } from "@mui/material";
import { FormattedMessage } from "react-intl";

// const useStyle = makeStyles({
//   footer: {
//     background: "linear-gradient(to left, #79f571, #084f03)",
//     height: "20px",
//     // marginTop: "auto",
//   },
// });

const Footer = () => {
  // const classes = useStyle();
  return (
    <AppBar position="static" elevation={0}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#f0f0f0',
          color: 'black',
          padding: '10px 20px',
          paddingLeft: "200px"
        }}
      >
        <div>
          <FormattedMessage id="footer.allRightsReserved" defaultMessage="All rights reserved Rapidus 2025" />
        </div>
        <div>
          <FormattedMessage id="footer.privacyPolicy" defaultMessage="Privacy Policy | Terms of Use" />
        </div>
      </div>
    </AppBar>
  );
};

export default Footer;
