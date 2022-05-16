import React, {useState} from "react";
import { useParams } from "react-router";
import { AnimatedPageDown } from "../AnimatedPages/Down";

import { Home } from "../Home";
import { AboutMe } from "../AboutMe";
import { Portfolio } from "../Portfolio";
import { ContactMe } from "../ContactMe";

import { Frame } from "../Projects/Frame";

export const Down = () => {
  const params = useParams();

  

  return (
    <AnimatedPageDown >
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
                     case "frame":
                return <Frame />;
                break;
            default:
              return "neutral";
          }
        })()}{" "}
      </div>
    </AnimatedPageDown>
  );
};
