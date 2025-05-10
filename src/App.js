import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import LoginPage from "./Component/LoginPage";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useMsal } from '@azure/msal-react';
import Footer from "./Component/Footer";
import RapidusHome from "./Component/FirstPage";
import RapidusCalculator from "./Component/RapidusCalculator";
import ForgotPage from "./Component/ForgotPage";
import RapidusDocument from "./Component/RapidusDocument";

function App() {
  const { accounts } = useMsal();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        
        <div style={{ flex: 1 }}>
          <Routes>

            <Route path="/" element={<LoginPage />} />
            <Route
              path="/rapidusHome"
              element={accounts.length > 0 ? <RapidusHome /> : <Navigate to="/" />}
            />
            <Route
              path="/rapidusCalculator"
              element={accounts.length > 0 ? <RapidusCalculator /> : <Navigate to="/" />}
            />
             <Route
              path="/rapidusDocument"
              element={accounts.length > 0 ? <RapidusDocument /> : <Navigate to="/" />}
            />
            <Route path="/forgotPage" element={<ForgotPage />} />

            <Route element={NotFound} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
