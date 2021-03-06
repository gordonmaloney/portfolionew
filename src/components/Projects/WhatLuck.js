import React from "react";
import { ProjectBoxLeft } from "../ProjectBox/ProjectBoxLeft";
import { Grid, Hidden } from "@mui/material";
import { BlobLink } from "../BlobLink";

import { ScreenShot } from "./components/ScreenShot";
import { GridContainer } from "./components/GridContainer";
import { GridDescContainer } from "./components/GridDescContainer";

import Wlrn from "../imgs/wl-rn.jpg";
import Wlss1 from "../imgs/wlss1.mov";
import Wlss2 from "../imgs/wlss2.mov";
import Wlss3 from "../imgs/wlss3.mov";

export const WhatLuck = () => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "200px" }}>
      <ProjectBoxLeft
        desc="whatLuck is the one-stop potluck organising app"
        url="https://whatluck.netlify.app"
        hidereadmore
      />

      <GridDescContainer rowReverse>
        <Grid item xs={12}>
          <center>
            <span style={{ fontSize: "20px" }}>
              whatLuck is a <b>one-stop potluck organising app</b> - to help
              friends coordinate who’s going to bring what to a potluck (or a
              barbeque, or a drinks night, or anywhere you’re eating and
              drinking).
            </span>
          </center>
        </Grid>

        <Grid item xs={12} sm={8}>
          The front-end uses{" "}
          <b>React, Redux, Bootstrap, Material UI and Axios</b>, the back-end
          uses <b>MongoDB, Express and Node.js</b>. There is also an app version
          built with <b>React Native</b>.
          <br />
          <br />
          <Hidden mdDown>
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
              <center>
                It's <b>live</b>
                <a href="https://whatluck.netlify.app/" target="_blank">
                  <BlobLink content="here" width={45} colour="#8bd3dd" />
                </a>
                and on <b>GitHub</b>
                <a
                  href="https://github.com/gordonmaloney/whatLuck-mern"
                  target="_blank"
                >
                  <BlobLink content="here" width={45} colour="#8bd3dd" />
                </a>
              </center>
            </span>
          </Hidden>
          <Hidden mdDown>
            <br />
            <br />
            This project was <b>awarded</b> with{" "}
            <u>
              <a
                href="https://www.nucamp.co/blog/project-spotlight-gordon-maloney"
                target="_blank"
              >
                Honors in the NuCamp
              </a>
            </u>{" "}
            front-end bootcamp.
          </Hidden>
        </Grid>

        <Grid item xs={12} sm={4}>
          <center>
            <img
              style={{
                transform: "rotate(3deg)",
                borderRadius: "15px",
                border: "5px solid #8bd3dd",
                width: "90%",
              }}
              src={Wlrn}
              alt="React Native version screenshot"
            />
          </center>
        </Grid>

        <Hidden mdUp>
          <Grid item xs={12}>
            <center>
              It's <b>live</b>
              <a href="https://whatluck.netlify.app/" target="_blank">
                <BlobLink content="here" width={45} colour="#8bd3dd" />
              </a>
              and on <b>GitHub</b>
              <a
                href="https://github.com/gordonmaloney/whatLuck-mern"
                target="_blank"
              >
                <BlobLink content="here" width={45} colour="#8bd3dd" />
              </a>
            </center>{" "}
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Grid item xs={12}>
            This project was <b>awarded</b> with{" "}
            <u>
              <a
                href="https://www.nucamp.co/blog/project-spotlight-gordon-maloney"
                target="_blank"
              >
                Honors in the NuCamp
              </a>
            </u>{" "}
            front-end bootcamp.
          </Grid>
        </Hidden>
      </GridDescContainer>

      <GridContainer row first>
        <Grid item xs={12} sm={4}>
          Each potluck is assigned a unique, 3-word code which users can use to
          share the link with their friends.
        </Grid>
        <Grid item xs={12} sm={8}>
          <ScreenShot video src={Wlss1} rotate="2" />
        </Grid>
      </GridContainer>
      <GridContainer rowReverse>
        <Grid item xs={12} sm={6}>
          Users can search potlucks by theme, user or title.
        </Grid>
        <Grid item xs={12} sm={6}>
          <ScreenShot video src={Wlss2} rotate="-2" />
        </Grid>
      </GridContainer>

      <GridContainer row>
        <Grid item xs={12} sm={4}>
          When replying, users are given a heads up message if someone is
          already bringing an item.
        </Grid>
        <Grid item xs={12} sm={8}>
          <ScreenShot video src={Wlss3} rotate="3" />
        </Grid>
      </GridContainer>
    </div>
  );
};
