import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import { Blob } from "./Blob";
import { SquareBlob } from "./SquareBlob";

export const Portfolio = () => {
  const [xExit, setxExit] = useState();
  const [yExit, setyExit] = useState(0);


  //set shape of square blob
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

  useEffect(() => {
    setScreenWidth(getWindowDimensions());

    function handleResize() {
      setScreenWidth(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(screenWidth.width > 800 ? 1 : screenWidth.width > 300 ? 2-(((screenWidth.width/100)/4)-1) : 2)


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
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        scroll: "auto",
        overflow: "scroll",
paddingTop: "100px"
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
              pointerEvents: "none" 
            }}
          >
            <Blob colour="#8bd3dd" radius={90} squash={2.2} />

            <Blob colour="#f3d2c1" radius={85} squash={2.3} />

            <Blob colour="#001858" radius={78} squash={2.5} />

            <h1 className="subHeader">My work</h1>
          </div>
        </div>
        <br /> <br />
        <br />
        <br />
        <center>
          <p style={{ width: "90%" }}>
            Here's some of my work...
          </p>

          
        </center>

<div style={{width: "100%", height: "500px", 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",            position: "relative",
}}>

        <SquareBlob colour="#8bd3dd" radius={90} squash={1} squareScale={screenWidth.width > 800 ? 1 : screenWidth.width > 400 ? 2 - (((screenWidth.width/100)/4)-1) : 2} />

        <div style={{width: "100%"}} className="iframeWrap">


<iframe className="scaled-frame" src="http://whatluck.netlify.app" ></iframe>

</div>
</div>

          <div style={{ float: "left" }} onClick={() => setxExit(100)}>
            <Link to="../l/contact">Get in touch</Link>
          </div>

          <div style={{ float: "right" }} onClick={() => setxExit(-100)}>
            <Link to="../r/about">About Me</Link>
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
