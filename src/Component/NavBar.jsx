import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    //const [isloggedin, setIsLoggedin] = useState(false);

    // useEffect(() => {
    //     let login = localStorage.getItem('isLoggedin') === 'true' ? true : false;
    //     setIsLoggedin(login);
    // }, [isloggedin])

    let isloggedin = localStorage.getItem('isLoggedin') === 'true' ? true : false;

    console.log('Payank localStorage', isloggedin);
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/" replace exact>Login Page</NavLink>
                {isloggedin && <NavLink className={classes.tabs} to="/all" replace exact>All Users</NavLink>}
                {isloggedin && <NavLink className={classes.tabs} to="/add" replace exact>Add User</NavLink> }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;