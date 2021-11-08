import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </Router>
  );
};

export default App;