import React from "react";
import { Blob } from "./Blob";
import { ReactWobble } from "../react-wobble/react-wobble";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fef6e4",
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

        <ReactWobble
          scaleX={2}
          scaleY={2}
          content={
            <h1 className="logoHeader">
              Gordon
              <br />
              Maloney
            </h1>
          }
        />
      </div>
    </div>
  );
};
