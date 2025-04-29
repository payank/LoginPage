import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { Form, Field } from "react-final-form";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography,FormControl, FormGroup, Box, Button } from "@mui/material";
import Rapidus_logo from "../Assets/Images/Rapidus_logo.png";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useMsal } from "@azure/msal-react";

const useStyles = makeStyles({
  component: {
    color: "#ff0000",
  },
  container: {
    width: "50%",
    margin: "0 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
    border: "2px solid #305e02",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
    marginTop:'10px'
  },
  styleButton: {
    backgroundColor: "#328037",
    color: "white",
    border: "none",
    borderRadius: "3px",
    height: "25px",
    cursor: "pointer",
    "&:hover":{
      backgroundColor: "#076b10",
    }
  },
  inputField: {
    borderRadius: "5px",
    border: "1px solid #328037",
    padding: "8px",
  },
  form:{
    display: "flex",
    marginBottom: "20px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  divElement:{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
  }

});

const LoginPage = ({ setLoginState }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const submitRef = useRef(null);
  const { instance, accounts } = useMsal();
  const [isLoggedIn, setIsLoggedIn] = useState(accounts.length>0);
    console.log("Payank isLoggedIn", instance, accounts);


  useEffect(() => {
    instance.handleRedirectPromise().then((response) => {
    if (response) {
      setIsLoggedIn(true);
    }
    }).catch((err) => {
    console.error(err);
    });
    }, [instance]);

    useEffect(() => {
      if (isLoggedIn) {
       
        navigate("/rapidusHome");
      }
    }, [isLoggedIn]);

  const generateCaptcha = () => {
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(random);
    setUserInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const required = (value) => (value ? undefined : "Required");

  const isEmail = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ? "Invalid email address": undefined;

  const hasLength8 = (value) =>
    value && value.length !== 8 ? "User ID must be 8 characters" : undefined;
  // const matchPassword = (value, allValues) =>
  //   value !== allValues.password ? "Passwords do not match" : undefined;

  const validateCaptcha = (currentCaptcha) => (value) =>
    !value
      ? "Required"
      : value.toUpperCase() !== currentCaptcha
      ? "Invalid CAPTCHA"
      : undefined;

   const validatePassword = (value) => !value? "Required" : undefined;

  const onSubmit = (values) => {
 
      instance.loginRedirect({
        scopes: ["User.Read"], // Microsoft Graph scope to read profile
      });
     
    
  };

// Once backend api is ready then we will use below code and remove the above one.

  // const onSubmit = async (values) => {
  //   const dataToSend = {
  //     email: values.email,
  //     userId: values.userId,
  //     password: values.password,
  //   };
  
  //   try {
  //     const response = await axios.post('/endpoint', dataToSend);
  //     instance.loginRedirect({
  //       scopes: ["User.Read"],
  //     });
  //   } catch (error) {
  //     console.error('Error sending data to backend:', error);
  //   }
  // };
  

  return (
    <>
    
    <FormGroup
      className={classes.container}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap:'15px'
        }}
      >
        <img src={Rapidus_logo} width={200} alt="Rapidus Logo" />
        <Typography variant="h6" style={{ marginTop: "-30px" }}>
          Welcome to Rapidus Customer Portal
        </Typography>
      </div>

      <Form
        onSubmit={onSubmit}

        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className={classes.form}
          >
            <div
              className={classes.divElement}
            >
              <Field
                name="email"
                validate={(value) => required(value) || isEmail(value)}
              >
                {({ input, meta }) => (
                  <FormControl fullWidth>
                    <label>Email</label>
                    <input
                      {...input}
                      className={classes.inputField}
                      placeholder="Enter Email"
                    />
                    {meta.touched && meta.error && (
                      <Box className={classes.component}>{meta.error}</Box>
                    )}
                  </FormControl>
                )}
              </Field>

              <Field
                name="userId"
                validate={(value) => required(value) || hasLength8(value)}
              >
                {({ input, meta }) => (
                  <FormControl fullWidth>
                    <label>User ID</label>
                    <input
                      {...input}
                      className={classes.inputField}
                      placeholder="Enter UserId"
                    />
                    {meta.touched && meta.error && (
                      <Box className={classes.component}>{meta.error}</Box>
                    )}
                  </FormControl>
                )}
              </Field>

              <Field name="password" validate={(value) => required(value)|| validatePassword(value)}>
                {({ input, meta }) => (
                  <FormControl fullWidth>
                    <label>Password</label>
                    <input
                      {...input}
                      type="password"
                      className={classes.inputField}
                      placeholder="Enter Password"
                    />
                    {meta.touched && meta.error && (
                      <Box className={classes.component}>{meta.error}</Box>
                    )}
                  </FormControl>
                )}
              </Field>

              <FormControl>
                <Link
                  style={{
                    color: "#23a0e8",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  to="/forgotPage"
                >
                  Forgot Password?
                </Link>
              </FormControl>
            </div>

            <div
              className={classes.divElement}
            >
              <FormControl
                  fullWidth
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    type="text"
                    readOnly
                    value={captcha}
                    style={{ flex: 1 }}
                    className={classes.inputField}
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      fontSize: "14px",
                      color: "#bdbdbd",
                    }}
                  >
                    <RefreshIcon />
                  </button>
                </FormControl>
              <FormControl fullWidth>
                <Field name="captchaInput" validate={validateCaptcha(captcha)}>
                  {({ input, meta }) => (
                    <>
                      <input
                        {...input}
                        className={classes.inputField}
                        type="text"
                        placeholder="Enter Captcha"
                      />
                      {meta.touched && meta.error && (
                        <Box className={classes.component}>{meta.error}</Box>
                      )}
                    </>
                  )}
                </Field>
              </FormControl>

              <FormControl
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <input type="checkbox" />
                <label>Remember my User ID</label>
              </FormControl>
              <FormControl >
                <Button
                  type="submit"
                  className={classes.styleButton}
                  ref={submitRef}
                >
                  Login
                </Button>

                <b style={{ fontSize: "10px" }}>
                  Need help? Please check Help or Contact Us
                </b>
              </FormControl>
            </div>
            
          </form>
        )}
      />
    </FormGroup>
    </>
  );
};

export default LoginPage;
