import React, {useState}from "react";
import { Link } from "react-router-dom";
import { AnimatedPageDown } from "./AnimatedPageDown";

export const AboutMe = () => {
    const [xExit, setxExit] = useState()
    const [yExit, setyExit] = useState()

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
        AboutMe

        <div onClick={() => setxExit(100)}>
        <Link to="../portfolio">Portfolio</Link>
        </div>

<div onClick={() => setxExit(-100)}>
        <Link to="../contact">Contact Me</Link>
        </div>

        <div onClick={() => setyExit(-100)}>
        <Link to="../">go down</Link>
        </div>
      </div>
    </AnimatedPageDown>
  );
};
