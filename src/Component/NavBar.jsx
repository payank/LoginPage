import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Rapidus_logo from '../Assets/Images/Rapidus_logo.png';
const useStyle = makeStyles({
    header: {
        background: 'linear-gradient(to left, #79f571, #084f03)',
        height:'20px'
    },
    
})



const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static"  elevation={0} >
            <div className={classes.header}></div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center",background:'white', justifyContent:"space-between" }} >
      <h2 style={{marginLeft:'40px', color:"#328037"}}>Wireframe(Login Screen)</h2>
      <img src={Rapidus_logo} style={{marginRight:'20px', width:'20%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
    </div>
        </AppBar>
    )
}

export default NavBar;