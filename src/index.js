import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { useMsal } from "@azure/msal-react";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

const msalConfig = {
  auth: {
    clientId: "ec2ed543-5b02-47d6-9fee-9cd94ac2788c", // 🔁 Replace with your actual client ID
    authority: "https://login.microsoftonline.com/2a1846ec-ffbb-4a63-8fdb-94711de1fd65", // 🔁 Replace with your tenant ID
    redirectUri: "http://localhost:3000",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);

reportWebVitals();
