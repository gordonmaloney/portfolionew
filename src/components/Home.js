import React, { useState } from "react";
import { Blob } from "./Blob";
import { ReactWobble } from "../react-wobble/react-wobble";
import { Link } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";


export const Home = () => {
  const [xExit, setxExit] = useState();
  const [yExit, setyExit] = useState();

  return (
    <AnimatedPage
      animations={{
        initial: { opacity: 0, y: 0, x: 0 },
        animate: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: yExit, x: xExit },
      }}
    >
      <div onClick={() => setyExit(100)}>
        <Link to="../d/about">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "500px",
                maxWidth: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Blob colour="#8bd3dd" radius={90} squash={1.4} />

              <Blob colour="#f3d2c1" radius={85} squash={1.4} />

              <Blob colour="#001858" radius={78} squash={1.4} />

              <h1 className="logoHeader">
                Gordon
                <br />
                Maloney
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </AnimatedPage>
  );
};
