import React from "react";
import { AnimatedPageUp } from "../AnimatedPages/Up";
import { useParams } from "react-router";

import { Home } from "../Home";
import { AboutMe } from "../AboutMe";
import { Portfolio } from "../Portfolio";
import { ContactMe } from "../ContactMe";

export const Up = () => {
  const params = useParams();

  return (
    <AnimatedPageUp >
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
        })()}
      </div>
    </AnimatedPageUp>
  );
};
