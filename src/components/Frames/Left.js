import React, { useState } from "react";
import { useParams } from "react-router";
import { AnimatedPageLeft } from "../AnimatedPages/Left";

import { Home } from "../Home";
import { AboutMe } from "../AboutMe";
import { Portfolio } from "../Portfolio";
import { ContactMe } from "../ContactMe";

export const Left = () => {
  const params = useParams();

  const [exitX, setExitX] = useState(100);

  return (
    <AnimatedPageLeft >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        {(() => {
          switch (params.component) {
            case "home":
              return <Home />;
              break;
            case "about":
              return <AboutMe />;
              break;
            case "portfolio":
              return <Portfolio />;
              break;
            case "contact":
              return <ContactMe />;
              break;
            default:
              return "neutral";
          }
        })()}{" "}
      </div>
    </AnimatedPageLeft>
  );
};
