import React, {useState} from "react";
import { Blob } from "./Blob";
import { ReactWobble } from "../react-wobble/react-wobble";
import { Link } from "react-router-dom";
import { AnimatedPageDown } from "./AnimatedPageDown";

import { AnimatedPageUp } from "./AnimatedPages/Up";

export const Home = () => {

  return (
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
            <Blob colour="#8bd3dd" radius={90} />

            <Blob colour="#f3d2c1" radius={85} />

            <Blob colour="#001858" radius={78} />

            <h1 className="logoHeader">
              Gordon
              <br />
              Maloney
            </h1>
          </div>
        </div>
      </Link>
  );
};
