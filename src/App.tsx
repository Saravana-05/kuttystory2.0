import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import ScrollToHashElement from "./styles/ScrollToHashElement";
// import BabyFootprintTrail from "./styles/BabyFootprintTrail"; // 👣

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "#fafafa" }}
      >
        <Header onSidebarToggle={() => {}} />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* 👣 Baby Footprint Trail — should be last for z-index layering */}
        {/* <BabyFootprintTrail /> */}
      </div>
    </Router>
  );
}

export default App;
