import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import { Blob } from "./Blob";

const BlobLink = ({ content, width, colour }) => {
  return (
    <div
      style={{
        position: "relative",
        width: width,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "-1",
      }}
    >
      <Blob colour={colour} radius={95} squash={2.8} />

      <span style={{ zIndex: 5 }}>
        <a href="mailto:gordonmaloney@gmail.com" target="_blank">
          <u>{content}</u>
        </a>
      </span>
    </div>
  );
};

export const ContactMe = () => {
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
          <br /> <br />
          <br />
          <br />
          <center>
            <p style={{ width: "90%" }}>
              You can get in touch with me{" "}
              <a href="mailto:gordonmaloney@gmail.com" target="_blank">
                <BlobLink content="over e-mail" width={80} colour="#8bd3dd" />
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
          <div style={{ float: "left" }} onClick={() => setxExit(100)}>
            <Link to="../l/about">About Me</Link>
          </div>
          <div style={{ float: "right" }} onClick={() => setxExit(-100)}>
            <Link to="../r/portfolio">Portfolio</Link>
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
