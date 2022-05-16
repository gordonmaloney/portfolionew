import React, { useState, useEffect } from "react";
import { Blob } from "../Blob";
import { AnimatedPage } from "../AnimatedPage";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { BlobNavLink } from "../BlobNavLink";
import { WhatLuck } from './WhatLuck';

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
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div style={{ width: "70%", maxWidth: "600px", minWidth: "300px" }}>
        
        <center>
        <div onClick={() => setyExit(-100)}>
          <Link to="../u/portfolio">
            
            <BlobNavLink text="Back" />

            </Link>
            </div>
            </center>

      {(() => {
          switch (params.project) {
            case "whatluck":
              return <WhatLuck />;
              break;
            default:
              return <>{params.project} descriptor page not built</>;
          }
        })()}

</div>
</div>
    </AnimatedPage>
  )
}
