import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import LoginPage from "./Component/LoginPage";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Prompt,
} from "react-router-dom";
import { useState } from "react";
import { useMsal } from '@azure/msal-react';
import Footer from "./Component/Footer";
import RapidusHome from "./Component/FirstPage";
import RapidusCalculator from "./Component/RapidusCalculator";
import ForgotPage from "./Component/ForgotPage";

function App() {
  const { accounts } = useMsal();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <CustomNavBar />
        <div style={{ flex: 1 }}>
          <Switch>
            <Route
              exact
              path="/"
              render={(req) => {
                return <LoginPage/>;
              }}
            />
                       <Route
              path="/rapidusHome"
              render={() => (accounts.length > 0 ? <RapidusHome /> : <Redirect to="/" />)}
            />
            <Route
              path="/rapidusCalculator"
              render={() => (accounts.length > 0 ? <RapidusCalculator /> : <Redirect to="/" />)}
            />
            <Route exact path="/forgotPage" component={ForgotPage} />

            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
const CustomNavBar = () => {
  const location = useLocation();
  
  let title = "Wireframe(Login Screen)";
  if (location.pathname === "/rapidusHome") {
    title = "Wireframe(Home 1/3)";
  } else if (location.pathname === "/rapidusCalculator") {
    title = "Wireframe(Design Portal_10. Gross die Estimate(Mask Field Utilization Estimate)";
  }

  return <NavBar title={title} />;
};

export default App;
