import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import { Blob } from "./Blob";

export const AboutMe = () => {
  const [xExit, setxExit] = useState();
  const [yExit, setyExit] = useState(0);

  return (
    <AnimatedPage
      animations={{
        initial: { opacity: 0, y: 0, x: 0 },
        animate: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: 0, x: xExit },
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
        <div style={{ width: "70%", maxWidth: "600px", minWidth: "300px" }}>
          <div style={{ float: "left" }}>
            <div
              style={{
                position: "relative",
                width: "300px",
                maxWidth: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none" 
              }}
            >
              <Blob colour="#8bd3dd" radius={90} squash={2} />

              <Blob colour="#f3d2c1" radius={85} squash={2.1} />

              <Blob colour="#001858" radius={78} squash={2.2} />

              <h1 className="subHeader">About Me</h1>
            </div>
          </div>
          <br /> <br />
          <br />
          <br />
          <center>
            <p style={{width: "90%"}}>
              I am a full-stack web developer, specialising in React.
              <br /> <br />
              I have worked for more than five years testing and perfecting user
              journeys, and have recently taken the leap into freelance web
              developing.
              <br /> <br />
              I can help you plan, design and build user-friendly front-ends and
              clean, simple back-ends.
              <br /> <br />
              I am particularly passionate about helping not-for-profits and
              social justice groups use digital tools to make the world a better
              place.
              <br />
              <br />
              Let's chat!
            </p>
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
    </AnimatedPage>
  );
};
