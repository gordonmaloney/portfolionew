import React, { useState, useEffect } from "react";
import { Blob } from "../Blob";
import { AnimatedPage } from "../AnimatedPage";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { BlobNavLink } from "../BlobNavLink";
import { WhatLuck } from './WhatLuck';
import { Gobbleblog } from "./Gobbleblog";
import { Lingr } from "./Lingr";
import { Flashback } from "./Flashback";

export const Frame = () => {
  const [yExit, setyExit] = useState(0);

  const params = useParams();


    //set shape of square blob
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
      exit: { opacity: 0, y: yExit, x: 0 },
    }}
  >
          <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          scroll: "auto",
          overflow: "scroll",
          paddingTop: "100px",
        }}
      >
        <div style={{ width: "70%", maxWidth: "800px", minWidth: "300px" }}>
        
        <center>
        <div style={{zIndex: 9}} onClick={() => setyExit(-100)}>
          <Link style={{zIndex: 9, backgroundColor: "green"}} to="../u/portfolio">
            
            <BlobNavLink text="Back" />

            </Link>
            </div>
            </center>

      {(() => {
          switch (params.project) {
            case "whatluck":
              return <WhatLuck />;
              break;
            case "gobbleblog":
              return <Gobbleblog />;
              break;
              case "lingr":
                return <Lingr />;
                break;

              case "flashback":
                return <Flashback />;
                break;
            default:
              return <>More details about <b>{params.project}</b> coming soon...</>;
          }
        })()}


<center>
        <div style={{marginTop: "-100px", paddingBottom: '100px', zIndex: 9}} onClick={() => setyExit(-100)}>
          <Link style={{zIndex: 9, backgroundColor: "green"}} to="../u/portfolio">
            
            <BlobNavLink text="Back" />

            </Link>
            </div>
            </center>
</div>
</div>

    </AnimatedPage>
  )
}
