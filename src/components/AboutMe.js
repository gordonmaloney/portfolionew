import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import { Blob } from "./Blob";
import { BlobNavLink } from "./BlobNavLink";
import { BlobLink } from "./BlobLink";

export const AboutMe = () => {
  const [xExit, setxExit] = useState();
  const [yExit, setyExit] = useState(0);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }

  useEffect(() => {
    setScreenWidth(getWindowDimensions());

    function handleResize() {
      setScreenWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
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
          <center>
          <p style={{ width: "90%", marginTop: "130px" }}>
              My name is <b>Gordon Maloney</b>, and I'm a <b>full-stack web developer</b>, specialising in <b>React</b>.
              <br /> <br />
              I have worked for <b>more than five years</b> testing and perfecting user
              journeys, and have recently taken the leap into freelance web
              developing, having completed the <b>NuCamp full-stack bootcamp.</b>
              <br /> <br />
              I can help you plan, design and build <b>user-friendly front-ends</b> and
              <b>clean, simple back-ends</b>.
              <br /> <br />
              I am particularly passionate about helping not-for-profits and
              social justice groups <b>use digital tools to make the world a better
              place</b>.
              <br />
              <br />
              <Link to="../r/contact" onClick={() => setxExit(-100)}>

              <BlobLink content="Let's chat!" width={90} colour="#8bd3dd" />
            </Link>
            </p>
          </center>
          <div style={{ zIndex: 6, position: "fixed", left: screenWidth.width > 900 ? "5%" : "2%", top: "50%", paddingTop: screenWidth.width > 900 ? 0 : "30vh"}} onClick={() => setxExit(100)}>
            <Link to="../l/portfolio">
            
            <BlobNavLink text="My work" />

            </Link>
          </div>
          <div style={{ zIndex: 6, position: "fixed", right: screenWidth.width > 900 ? "5%" : "2%", top: "50%", paddingTop: screenWidth.width > 900 ? 0 : "30vh"}} onClick={() => setxExit(-100)}>
            <Link to="../r/contact">
            <BlobNavLink text="Get in touch" />
              </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
