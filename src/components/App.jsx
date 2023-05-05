import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Navigation from "../components/Navigation";
import About from "../pages/About";
import Footer from "../components/Footer";
import News from "../pages/News";
import Event from "../pages/Event";
import MainNewsDetailWrapper from "./MainNewsDetail";

function capitalizeString(string) {
  const words = string.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentRoute = window.location.pathname;
    const pageTitle = capitalizeString(currentRoute.replace("/", ""));
    document.title = `${pageTitle}`;
  }, [navigate]);


  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/supervisoryboard" element={<About />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/news/:id" element={<MainNewsDetailWrapper />} />
          <Route path="/event" element={<Event />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
