import React from "react";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from './components/Portfolio'
import { ContactMe } from './components/ContactMe'
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import { Up } from "./components/Frames/Up";
import { Down } from "./components/Frames/Down";
import { Right } from "./components/Frames/Right";
import { Left } from "./components/Frames/Left";

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

          <Route path="/u/:component" element={<Up />} />
          <Route path="/d/:component" element={<Down />} />
          <Route path="/r/:component" element={<Right />} />
          <Route path="/l/:component" element={<Left />} />

        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
