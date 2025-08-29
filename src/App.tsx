import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
const ScrollToHashElement = lazy(() => import("./styles/ScrollToHashElement"));


// ✅ Lazy load components/pages
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Header = lazy(() => import("./components/Header"));
const PrivacyPolicy = lazy(() => import("./userapp/PrivacyPolicy"));
const TermAndCondition = lazy(() => import("./userapp/TermAndCondition"));
// const BabyFootprintTrail = lazy(() => import("./styles/BabyFootprintTrail")); // 👣

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
       <Suspense fallback={<div>Loading...</div>}>
  <ScrollToHashElement />
  {!shouldHideHeader && <Header onSidebarToggle={() => {}} />}

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/term-condition" element={<TermAndCondition />} />
  </Routes>
</Suspense>
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
