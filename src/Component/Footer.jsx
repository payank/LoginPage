import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    footer: {
        background: 'linear-gradient(to left, #79f571, #084f03)',
        height:'20px',
        marginTop: 'auto',
    }
})



const Footer = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.footer}>
            {/* <Toolbar> */}
                {/* <NavLink className={classes.tabs} to="/" replace exact>logout</NavLink>
                <NavLink className={classes.tabs} to="/all" replace exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="/add" replace exact>Add User</NavLink>  */}
            {/* </Toolbar> */}
        </AppBar>
    )
}

export default Footer;