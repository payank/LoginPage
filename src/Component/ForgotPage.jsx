import React, { useRef } from "react";
import {
  FormGroup,
  FormControl,
  Box,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import Rapidus_logo from "../Assets/Images/Rapidus_logo.png";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  component: {
    color: "#ff0000",
  },
  wrapper: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 1.5)",
    // backgroundColor: "#f5f5f5"

  },
  styleButton: {
    backgroundColor: "#328037",
    color: "white",
    border: "none",
    borderRadius: "3px",
    height: "25px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#076b10",
    }
  },
  inputField: {
    borderRadius: "5px",
    border: "1px solid #328037",
    padding: "8px",
  },
  form: {
    display: "flex",
    // marginBottom: "20px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  divElement: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
  }

});

const ForgotPage = () => {
  const classes = useStyles();
  const submitRef = useRef(null);

  const required = (value) => (value ? undefined : "Required");
  const isEmail = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ? "Invalid email address" : undefined;

  const onSubmit = (values) => {

  };

  return (
    <div className={classes.wrapper}>
      <FormGroup
        className={classes.container}
      >
        <div style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "350px",
        }}>
          <img src={Rapidus_logo} width={200} alt="Rapidus Logo" />
          <b style={{ fontSize: '25px', color: 'green' }}>Forgot Password?</b>
          <p style={{ textAlign: 'center', fontSize: '13px' }}>Enter email address associated with your account and well send email with instruction to reset your password </p>
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
                  <FormControl >
                    <button
                      type="submit"
                      className={classes.styleButton}
                      ref={submitRef}
                    >
                      Send Email
                    </button>
                  </FormControl>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Back to Login
                  </Link>
                </div>
              </form>
            )}
          />
        </div>
      </FormGroup>
    </div>
  );
};

export default ForgotPage;
