import React from "react";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import Template from "./pages/Template";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";




function App() {

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<ResumeBuilder/>} />
          <Route path="/template" element={<Template />} />
          <Route path="/about" element = {<About/>} />
          <Route path="/contact" element = {<Contact/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App
