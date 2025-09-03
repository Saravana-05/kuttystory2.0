import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// ✅ Import critical components directly (no lazy loading)
import ScrollToHashElement from "./styles/ScrollToHashElement";
import Header from "./components/Header";

// ✅ Only lazy load pages/routes (not critical components)
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const PrivacyPolicy = lazy(() => import("./userapp/PrivacyPolicy"));
const TermAndCondition = lazy(() => import("./userapp/TermAndCondition"));

// ✅ Custom loading component for better UX
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

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
      {/* ✅ No lazy loading for critical components */}
      <ScrollToHashElement />
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "#fafafa" }}
      >
        {/* ✅ Header loads immediately when needed */}
        {!shouldHideHeader && <Header onSidebarToggle={() => {}} />}
        
        {/* ✅ Only pages are lazy loaded with better loading UI */}
        <Suspense fallback={<PageLoader />}>
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