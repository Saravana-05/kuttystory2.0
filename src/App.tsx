import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import ScrollToHashElement from "./styles/ScrollToHashElement";
import PrivacyPolicy from "./userapp/PrivacyPolicy";
import TermAndCondition from "./userapp/TermAndCondition";
// import BabyFootprintTrail from "./styles/BabyFootprintTrail"; // 👣

const AppContent: React.FC = () => {
  const location = useLocation();

  // Paths where the header should NOT be shown
  const hideHeaderOnRoutes = [
    "/term-condition",
    "/privacy-policy",
    "/login",
    "/register",
  ];

  const shouldHideHeader = hideHeaderOnRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToHashElement />
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "#fafafa" }}
      >
        {!shouldHideHeader && <Header onSidebarToggle={() => {}} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-condition" element={<TermAndCondition />} />
        </Routes>

        {/* 👣 Baby Footprint Trail */}
        {/* <BabyFootprintTrail /> */}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
