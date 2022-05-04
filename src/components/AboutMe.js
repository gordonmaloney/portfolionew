import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedPageDown } from "./AnimatedPageDown";

export const AboutMe = () => {
  const [xExit, setxExit] = useState();
  const [yExit, setyExit] = useState();

  return (
    <AnimatedPageDown
      animations={{
        initial: { opacity: 0, y: 0, x: 0 },
        animate: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: yExit, x: xExit },
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div style={{ width: "70%" }}>
          <center>
            <h1>About me</h1>
          </center>

          <div style={{ float: "left" }} onClick={() => setxExit(100)}>
            <Link to="../l/portfolio">Portfolio</Link>
          </div>

          <div style={{ float: "right" }} onClick={() => setxExit(-100)}>
            <Link to="../r/contact">Get in touch</Link>
          </div>

          <br />
          <center>
            <div onClick={() => setyExit(-100)}>
              <Link to="../u/home">Home</Link>
            </div>
          </center>
        </div>
      </div>
    </AnimatedPageDown>
  );
};
