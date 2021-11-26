import { Box, Typography, makeStyles, FormGroup, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import NavBar from "../Component/NavBar"


const initialValue = {
    username: '',
    password: '',
    submitted: false,
    loggedin: 'false' 
}

const useStyles = makeStyles({
    component: {
        color: "#ff0000",
    },
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const LoginPage = () => {
    const classes = useStyles();
    const [user, setUser] = useState(initialValue);
    const { username, password, submitted, loggedin } = user;
    let history = useHistory();
    localStorage.setItem('isLoggedin', 'false');

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const validLogin = () => {
        if (user.username === 'payank' && user.password === 'password') {
            setUser({...user, loggedin: true, submitted: true});
            localStorage.setItem('isLoggedin', 'true');
            history.push('/all');
            //<Redirect to="/all"/> // Here, nothings happens
        } else {
            console.log('Payank', user)
            localStorage.setItem('isLoggedin', 'false');
            setUser({...user, loggedin: 'false', submitted: true});
        }
        
    }


    //box give deafault div
    //typography gives default <p>
    return (
        <>
        <NavBar/>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Login Page</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input  type="text" onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
                {submitted && !username &&
                            <Box className={classes.component}>Username is required</Box>
                }   
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-password">Password</InputLabel>
                <Input type="password" onChange={(e) => onValueChange(e)} name='password' value={password} id="my-password"/>
                {submitted && !password &&
                            <Box className={classes.component}>Password is required</Box>
                }   
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => validLogin()}>Login</Button>
                {submitted && !loggedin &&
                            <Box className={classes.component}>Invalid Credentials</Box>
                }
            </FormControl>
        </FormGroup>
        </>
    )
}

export default LoginPage;