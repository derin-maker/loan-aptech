import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Navbar from "./components/NavBar";
import Terms from "./components/Terms";
import Faq from "./components/Faq";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main style={{ minHeight: "100vh", paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
