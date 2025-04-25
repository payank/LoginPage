import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import LoginPage from "./Component/LoginPage";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Prompt,
} from "react-router-dom";
import { useState } from "react";
import Footer from "./Component/Footer";
import RapidusHome from "./Component/FirstPage";
import RapidusCalculator from "./Component/RapidusCalculator";

function App() {
  let loggedIn = localStorage.getItem("logIn") === "true" ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
  const setLoginState = (pass) => {

  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <NavBar />
        <div style={{ flex: 1 }}>
          <Switch>
             {/* <Route exact path="/" component={LoginPage} /> */}
            {/* <Route exact path="/all" component={AllUsers}  */}
            {/* <Route exact path="/add" component={AddUser} /> */}
            {/* <Route exact path="/edit/:id" component={EditUser} /> */}

            <Route
              exact
              path="/"
              render={(req) => {
                return <LoginPage setLoginState={setLoginState} />;
              }}
            />
            <Route exact path="/rapidusHome" component={RapidusHome}/>
            <Route exact path="/rapidusCalculator" component={RapidusCalculator}/>
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
