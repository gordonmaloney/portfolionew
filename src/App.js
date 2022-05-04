import React from "react";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from './components/Portfolio'
import { ContactMe } from './components/ContactMe'
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";

export const App = () => {
  const location = useLocation();

  return (
    <div
      style={{
        overflowY: "hidden",
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe /> } />
          <Route path="/portfolio" element={<Portfolio /> } />

        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
