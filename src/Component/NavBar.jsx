import { AppBar } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Rapidus_logo from '../Assets/Images/Rapidus_logo.png';
const useStyle = makeStyles({
  header: {
    background: 'linear-gradient(to left, #79f571, #084f03)',
    height: '20px'
  },

})



const NavBar = ({ title }) => {
  const classes = useStyle();
  return (
    <AppBar position="static" elevation={0} >
      <div className={classes.header}></div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", background: 'white', justifyContent: "space-between" }} >
        <h2 style={{ marginLeft: '40px', color: "#328037" }}>{title}</h2>
        <img alt='rapidus-logo' src={Rapidus_logo} style={{ marginRight: '20px', width: '20%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
      </div>
    </AppBar>
  )
}

export default NavBar;