import { Box, Typography, makeStyles, FormGroup, FormControl, InputLabel, Input, Button  } from '@material-ui/core';
import {  useState } from 'react';

const initialValue = {
    username: '',
    password: '',
    submitted: false,
    loggedin: false
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

const LoginPage = ({setLoginState}) => {
    const classes = useStyles();
    const [user, setUser] = useState(initialValue);
    const { username, password, submitted, loggedin } = user;
    console.log('Payank logIn page')
    localStorage.setItem('logIn', 'false');

    let userNameRef = null;
    let passwordRef = null;
    let submitRef = null;
    
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    // useEffect(() => {
    //     setLoginState(loggedin);
    // },[loggedin])

    const validLogin = () => {
        userNameRef.focus();
        if (user.username === 'payank' && user.password === 'password') {
            setUser({...user, loggedin: true, submitted: true});
            console.log('Payank ', loggedin);
            localStorage.setItem('logIn', 'true');
            setLoginState(true);
        } else {
            localStorage.setItem('logIn', 'false');
            setUser({...user, loggedin: false, submitted: true});
        }
        
    }

    const OnKeyUp = (e) => {
        if (e.keyCode === 13) { //'Enter Key'
            switch(e.target.name) {
                case 'username' :
                    passwordRef.focus();
                    break;
                case 'password' :
                    submitRef.focus();
                    break;
                default:
                    userNameRef.focus();
            }

        }
    }

    //box give deafault div
    //typography gives default <p>
    return (
        <>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Login Page</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input  inputRef={(input) => {userNameRef = input}} type="text" onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" 
                onKeyUp={OnKeyUp}
                />
                
                {submitted && !username &&
                            <Box className={classes.component}>Username is required</Box>
                }   
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-password">Password</InputLabel>
                <Input type="password"  inputRef={(input) => {passwordRef = input}} onChange={(e) => onValueChange(e)} name='password' value={password} id="my-password"
                onKeyUp={OnKeyUp}
                />
                {submitted && !password &&
                            <Box className={classes.component}>Password is required</Box>
                }   
            </FormControl>
            <FormControl>
                < Button variant="contained" ref={(input) => {submitRef = input}}  color="primary" onClick={() => validLogin()}
                >Login</Button >
                {submitted && !loggedin &&
                            <Box className={classes.component}>Invalid Credentials</Box>
                }
            </FormControl>
        </FormGroup>
        </>
    )
}

export default LoginPage;