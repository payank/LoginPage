import React, { useEffect, useRef, useState } from "react";
import { Form, Field } from "react-final-form";
import { useNavigate, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography, FormControl, Box, Button } from "@mui/material";
import Rapidus_logo from "../Assets/Images/Logo.png";
import Login_Image from "../Assets/Images/Login_Image.png";
import Language_Image from "../Assets/Images/Language.png";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useMsal } from "@azure/msal-react";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useIntl, FormattedMessage } from "react-intl";
import { useLocale } from "../i18n/localeContext";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    background: "#f5f5f5",
    justifyContent: "center"
  },
  left: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
  },
  leftContent: {
    width: 420,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "0 auto",
  },
  logoLangRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  logo: {
    width: 180,
    maxWidth: "60%",
    alignSelf: "flex-start",
  },
  langSelect: {
    height: 36,
    minWidth: 70,
    borderRadius: 5,
    border: "1px solid #328037",
    padding: "0 8px",
    fontSize: "1rem",
    background: "#fff",
    color: "#076b10",
    fontWeight: 600,
    outline: "none",
    marginLeft: 16,
    cursor: "pointer",
  },
  loginContainer: {
    width: "100%",
    padding: "0",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "flex-start",
  },
  styleButton: {
    backgroundColor: "#076b10",
    color: "white",
    border: "none",
    borderRadius: "3px",
    height: "36px",
    cursor: "pointer",
    marginTop: "12px",
  },
  inputField: {
    borderRadius: "5px",
    border: "1px solid #328037",
    padding: "8px",
    width: "100%",
    marginTop: "4px",
    marginBottom: "4px",
    boxSizing: "border-box",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    width: "100%",
    alignItems: "flex-start",
  },
  captchaRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "12px",
    marginTop: "8px",
    marginBottom: 0,
  },
  captchaDisplay: {
    display: "flex",
    alignItems: "center",
    background: "#f0f0f0",
    borderRadius: "5px",
    border: "1px solid #328037",
    fontWeight: "bold",
    letterSpacing: "2px",
    width: 120,
    minWidth: 120,
    maxWidth: 120,
    height: 40,
    justifyContent: "center",
    position: "relative",
    marginRight: 0,
    marginBottom: 0,
    fontSize: "1rem",
    textAlign: "center",
    boxSizing: "border-box",
  },
  refreshButton: {
    marginLeft: 4,
    background: "none",
    border: "none",
    color: "#328037",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
    height: 40,
  },
  captchaInputField: {
    borderRadius: "5px",
    border: "1px solid #328037",
    padding: "8px",
    width: "100%",
    height: 40,
    marginBottom: 0,
    boxSizing: "border-box",
  },
  errorText: {
    color: "#ff0000",
    fontSize: "0.9em",
    marginTop: "2px",
    marginLeft: "2px",
  },
  rememberForgotRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "2px",
    marginBottom: "2px",
  },
  rememberRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  helpText: {
    fontSize: "10px",
    marginTop: "8px",
    color: "#00401A",
    textAlign: "center",
    width: "100%", // <-- Add this line
  },
  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#00401A",
    flexDirection: "column",
  },
  imageBoxContainer: {
    position: "relative",
    width: "80%",
    maxWidth: 500,
    margin: "0 auto",
  },
  rightImage: {
    width: "100%",
    borderRadius: 16,
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    display: "block",
  },
  overlayTextBox: {
    position: "absolute",
    bottom: -20,
    right: 0,
    background: "rgba(255,255,255,0.92)",
    color: "#00401A",
    borderRadius: 16,
    padding: "16px 24px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
    fontWeight: 500,
    fontSize: "1rem",
    maxWidth: "70%",
    zIndex: 2,
    textAlign: "right",
    minWidth: 180,
  },
});

const LoginPage = ({ setLoginState }) => {
  const classes = useStyles();
  const { locale, setLocale } = useLocale("en");
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState("");
  const submitRef = useRef(null);
  const { instance, accounts } = useMsal();
  const [isLoggedIn, setIsLoggedIn] = useState(accounts.length > 0);
  const intl = useIntl();

  useEffect(() => {
    instance
      .handleRedirectPromise()
      .then((response) => {
        if (response) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [instance]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/rapidusHome");
    }
  }, [isLoggedIn, navigate]);

  const generateCaptcha = () => {
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(random);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const required = (value) =>
    value ? undefined : intl.formatMessage({ id: "required" });

  const isEmail = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ? intl.formatMessage({ id: "invalidEmail" })
      : undefined;

  const validateCaptcha = (currentCaptcha) => (value) =>
    !value
      ? intl.formatMessage({ id: "required" })
      : value.toUpperCase() !== currentCaptcha
      ? intl.formatMessage({ id: "invalidCaptcha" })
      : undefined;

  const validatePassword = (value) =>
    !value ? intl.formatMessage({ id: "required" }) : undefined;

  const onSubmit = (values) => {
    instance.loginRedirect({
      scopes: ["User.Read"],
    });
  };

  const languageOptions = [
    { code: "en", label: "En" },
    { code: "ja", label: "Ja" },
    { code: "fr", label: "Fr" },
    { code: "es", label: "Es" },
    { code: "de", label: "De" },
  ];

  return (
    <div className={classes.root}>
      {/* Left: Logo, Language Selector, Typography, and Form */}
      <div className={classes.left}>
        <div className={classes.leftContent}>
          <div className={classes.logoLangRow}>
            <img src={Rapidus_logo} alt="Rapidus Logo" className={classes.logo} />
            <Autocomplete
              options={languageOptions}
              getOptionLabel={(option) => option.label}
              value={languageOptions.find((opt) => opt.code === locale)}
              onChange={(_, newValue) =>
                setLocale(newValue ? newValue.code : "")
              }
              disableClearable
              sx={{
                minWidth: 90,
                marginLeft: 2,
                "& .MuiOutlinedInput-root": {
                  paddingRight: "8px",
                  "& fieldset": {
                    border: "none",
                  },
                },
                background: "transparent",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  size="small"
                  label=""
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        <InputAdornment position="start">
                          <img
                            src={Language_Image}
                            alt="Language"
                            style={{ width: 20, height: 20, marginRight: -4 }}
                          />
                        </InputAdornment>
                        {params.InputProps.startAdornment}
                      </>
                    ),
                    notched: false,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                    background: "transparent",
                  }}
                />
              )}
            />
          </div>
          <Typography variant="h6" align="left" marginBottom="24px">
            <FormattedMessage id="welcomeMessage" />
          </Typography>
          <div className={classes.loginContainer}>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <Field
                    name="email"
                    validate={(value) => required(value) || isEmail(value)}
                  >
                    {({ input, meta }) => (
                      <FormControl fullWidth>
                        <label>
                          <FormattedMessage id="email" />
                        </label>
                        <input
                          {...input}
                          className={classes.inputField}
                          placeholder={intl.formatMessage({ id: "emailPlaceholder" })}
                        />
                        {meta.touched && meta.error && (
                          <Box className={classes.errorText}>{meta.error}</Box>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Field
                    name="password"
                    validate={(value) =>
                      required(value) || validatePassword(value)
                    }
                  >
                    {({ input, meta }) => (
                      <FormControl fullWidth>
                        <label>
                          <FormattedMessage id="password" />
                        </label>
                        <input
                          {...input}
                          type="password"
                          className={classes.inputField}
                          placeholder={intl.formatMessage({
                            id: "passwordPlaceholder",
                          })}
                        />
                        {meta.touched && meta.error && (
                          <Box className={classes.errorText}>{meta.error}</Box>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  {/* Inline row for Forgot Password and Remember Me */}
                  <div className={classes.rememberForgotRow}>
                    <div className={classes.rememberRow}>
                      <input type="checkbox" id="rememberUserId" />
                      <label htmlFor="rememberUserId">
                        <FormattedMessage id="rememberMe" />
                      </label>
                    </div>
                    <Link
                      style={{
                        color: "#00401A",
                        fontSize: "15px",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                      to="/forgotPage"
                    >
                      <FormattedMessage id="forgotPassword" />
                    </Link>
                  </div>
                  {/* Captcha row with centered input and proper refresh arrangement */}
                  <Field
                    name="captchaInput"
                    validate={validateCaptcha(captcha)}
                  >
                    {({ input, meta }) => (
                      <>
                        <div className={classes.captchaRow}>
                          <div className={classes.captchaDisplay}>
                            {captcha}
                            <button
                              type="button"
                              onClick={generateCaptcha}
                              className={classes.refreshButton}
                              tabIndex={-1}
                              aria-label="Refresh Captcha"
                            >
                              <RefreshIcon fontSize="small" />
                            </button>
                          </div>
                          <input
                            {...input}
                            className={classes.captchaInputField}
                            type="text"
                            placeholder={intl.formatMessage({
                              id: "captchaPlaceholder",
                            })}
                          />
                        </div>
                        {meta.touched && meta.error && (
                          <Box className={classes.errorText}>{meta.error}</Box>
                        )}
                      </>
                    )}
                  </Field>
                  <Button
                    type="submit"
                    className={classes.styleButton}
                    ref={submitRef}
                    variant="contained"
                    sx={{
                      backgroundColor: "#076b10",
                      "&:hover": { backgroundColor: "#055a0c" },
                    }}
                    fullWidth
                  >
                    <FormattedMessage id="login" />
                  </Button>
                  <div className={classes.helpText}>
                    <b>
                      <FormattedMessage id="helpText" />
                    </b>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
      {/* Right: Image with overlay text box */}
      <div className={classes.right}>
        <div className={classes.imageBoxContainer}>
          <img
            src={Login_Image}
            alt="Rapidus Portal Illustration"
            className={classes.rightImage}
          />
          <div className={classes.overlayTextBox}>
            <FormattedMessage id="overlayText" />
          </div>
        </div>
        <Typography style={{ marginTop: "32px", color: "white" }}>
          <FormattedMessage id="secureAccess" />
        </Typography>
        <div>
          <Typography
            style={{ marginTop: "32px", color: "white", fontSize: "12px" }}
          >
            <FormattedMessage id="secureAccessDescription" />
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;