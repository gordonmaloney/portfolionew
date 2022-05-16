import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import { Blob } from "./Blob";
import { BlobNavLink } from "./BlobNavLink";
import { BlobLink } from "./BlobLink";

export const ContactMe = () => {
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
                width: "350px",
                maxWidth: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
             }}
            >
              <Blob colour="#8bd3dd" radius={90} squash={2.1} />

              <Blob colour="#f3d2c1" radius={85} squash={2.2} />

              <Blob colour="#001858" radius={78} squash={2.3} />

              <h1 className="subHeader">Get in touch</h1>
            </div>
          </div>
          <center>
            <p style={{ width: "90%", marginTop: "130px" }}>
              You can get in touch with me{" "}
              <a href="mailto:gordonmaloney@gmail.com" target="_blank">
                <BlobLink content="over e-mail" width={90} colour="#8bd3dd" />
              </a>
              <br />
              <br />
              Or follow me on:
              <br />
              <a target="_blank" href="https://github.com/gordonmaloney">
                <BlobLink content="GitHub" width={70} colour="#8bd3dd" />
              </a>
              <br /> <br />
              <a target="_blank" href="https://twitter.com/istreasatuatha">
                <BlobLink content="Twitter" width={70} colour="#8bd3dd" />
              </a>
              <br /> <br />
              <a
                target="_blank"
                href="https://www.instagram.com/gordonmaloney/"
              >
                <BlobLink content="Instagram" width={90} colour="#8bd3dd" />
              </a>
            </p>
          </center>
          <div style={{ position: "fixed", left: screenWidth.width > 900 ? "5%" : "2%", top: "50%", paddingTop: screenWidth.width > 900 ? 0 : "30vh"}} onClick={() => setxExit(100)}>
            <Link to="../l/about">              <BlobNavLink text="About me" />
 </Link>
          </div>
          <div style={{ position: "fixed", right: screenWidth.width > 900 ? "5%" : "2%", top: "50%", paddingTop: screenWidth.width > 900 ? 0 : "30vh"}} onClick={() => setxExit(-100)}>
            <Link to="../r/portfolio">
            <BlobNavLink text="My work" />

            </Link>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
};
