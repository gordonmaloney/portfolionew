import React from "react";
import { ReactWobble } from "../react-wobble/react-wobble";
import { Link } from "react-router-dom";
import img1 from "../imgs/1.png";
import img2 from "../imgs/2.png";
import img3 from "../imgs/3.png";


export const Home = () => {
  return (
    <Link to="/2">
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
        <ReactWobble
          scaleX={4}
          scaleY={6}
          content={<img src={img1} width="400px" />}
        />
        <ReactWobble
          scaleX={3}
          scaleY={5}
          content={<img src={img2} width="400px" />}
        />
        <ReactWobble
          scaleX={3}
          scaleY={5}
          content={<img src={img3} width="400px" />}
        />
        <ReactWobble
          scaleX={1}
          scaleY={1}
          content={
            <h1
              style={{ color: "#fef6e4", fontSize: "60px", lineHeight: "60px" }}
            >
              Gordon
              <br />
              Maloney
            </h1>
          }
        />
      </div>
    </Link>
  );
};
