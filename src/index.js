import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { IntlProvider } from "react-intl";
import { LocaleProvider, useLocale } from "./i18n/localeContext";
import { messages } from "./i18n/messages";

const msalConfig = {
  auth: {
    clientId: "ec2ed543-5b02-47d6-9fee-9cd94ac2788c",
    authority: "https://login.microsoftonline.com/2a1846ec-ffbb-4a63-8fdb-94711de1fd65",
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const AppWrapper = () => {
  const { locale } = useLocale();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </IntlProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocaleProvider>
      <AppWrapper />
    </LocaleProvider>
  </React.StrictMode>
);

reportWebVitals();
