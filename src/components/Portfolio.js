import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import { Blob } from "./Blob";
import { SquareBlob } from "./SquareBlob";
import { Button, Grid, Hidden } from "@mui/material";
import { ProjectBoxLeft } from "./ProjectBox/ProjectBoxLeft";
import { ProjectBoxRight } from "./ProjectBox/ProjectBoxRight";
import { BlobNavLink } from "./BlobNavLink";

export const Portfolio = () => {
  const [xExit, setxExit] = useState();
  const [yExit, setyExit] = useState(0);

  const [more, setMore] = useState(false);

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
        exit: { opacity: 0, y: yExit, x: xExit },
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
          <div style={{ float: "left" }}>
            <div
              style={{
                position: "relative",
                width: "350px",
                maxWidth: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <Blob colour="#8bd3dd" radius={90} squash={2.2} />

              <Blob colour="#f3d2c1" radius={85} squash={2.3} />

              <Blob colour="#001858" radius={78} squash={2.5} />

              <h1 className="subHeader">My work</h1>
            </div>
          </div>
          <p style={{ width: "90%", marginTop: "130px" }}>
          <center>
            Check out some of my projects below, and feel free to play with the <b>fully-functional, live versions of them all</b>:
          </center>
          </p>
          <ProjectBoxLeft
            desc="whatLuck is the one-stop potluck organising app"
            title="whatluck"
            setyExit={(y) => {setyExit(y); setxExit(0)}}
            url="https://whatluck.netlify.app"
          />
          <ProjectBoxRight
            desc="Lingr is a microblogging site for language learners"
            url="https://lingr.netlify.app"
            title="lingr"
            setyExit={(y) => {setyExit(y); setxExit(0)}}
            />
          <ProjectBoxLeft
            desc="Gobbleblog is the answer to never getting a bad takeaway twice"
            url="https://gobbleblog.netlify.app"
            title="gobbleblog"
            setyExit={(y) => {setyExit(y); setxExit(0)}}
            />
          <ProjectBoxRight
            desc="Flashback is a spaced-repetition flashcard app for memorising anything"
            url="https://flashbackflashcards.netlify.app/"
            title="flashback"
            setyExit={(y) => {setyExit(y); setxExit(0)}}
            />
          {!more && (
            <center>
              <div
                style={{
                  position: "relative",
                  width: "350px",
                  maxWidth: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Blob colour="#f3d2c1" radius={85} squash={2.3} />

                <h1
                  onClick={() => setMore(true)}
                  style={{ zIndex: 5, cursor: "pointer" }}
                >
                  Show more{" "}
                </h1>
              </div>
            </center>
          )}
          {more && (
            <>
              <ProjectBoxLeft
                desc="Make Space is a tool to stop men dominating meetings"
                url="https://make-space.netlify.app"
                title="makespace"
                setyExit={(y) => {setyExit(y); setxExit(0)}}
              />

              <ProjectBoxRight
                desc="Facle is a Scottish Gaelic Wordle clone"
                url="https://facle.netlify.app/"
                title="facle"
                setyExit={(y) => {setyExit(y); setxExit(0)}}
              />

              <ProjectBoxLeft
                desc="Cuimhne is a Gaelic-language memory game"
                url="https://cuimhne.netlify.app"
                title="cuimhne"
                setyExit={(y) => {setyExit(y); setxExit(0)}}
              />

              <ProjectBoxRight
                desc="GymBud is an app for gym-users to record and track their progress"
                url="https://gym-bud.netlify.app"
                title="gymbud"
                setyExit={(y) => {setyExit(y); setxExit(0)}}
              />
            

<center>
<div
  style={{
    position: "relative",
    width: "350px",
    maxWidth: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Blob colour="#f3d2c1" radius={85} squash={2.3} />

  <h1
    onClick={() => setMore(false)}
    style={{ zIndex: 5, cursor: "pointer" }}
  >
    Show Less{" "}
  </h1>
</div>
</center>
</>
          )}


          <div style={{ zIndex: 6, position: "fixed", left: screenWidth.width > 900 ? "5%" : "2%", top: "50vh", paddingTop: screenWidth.width > 900 ? 0 : "30vh"}} onClick={() => {setxExit(100); setyExit(0)}}>
            <Link to="../l/contact">
              <BlobNavLink text="Get in touch" />
              </Link>
          </div>


          <div style={{ zIndex: 6, position: "fixed", right: screenWidth.width > 900 ? "5%" : "2%", top: "50vh", paddingTop: screenWidth.width > 900 ? 0 : "30vh"}} onClick={() => {setxExit(-100); setyExit(0)}}>
            <Link to="../r/about">
            <BlobNavLink text="About me" />
</Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
