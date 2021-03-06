import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',   //color whir=te
        marginRight: 20,
        textDecoration: 'none', //remove underline
        fontSize: 20
    }
})



const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/" replace exact>logout</NavLink>
                <NavLink className={classes.tabs} to="/all" replace exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="/add" replace exact>Add User</NavLink> 
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;