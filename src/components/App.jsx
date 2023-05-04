import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navigation from "../components/Navigation";
import About from "../pages/About";
import Footer from "../components/Footer";
import News from "../pages/News";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/supervisoryboard" element={<About />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
