import React from "react";
import { ProjectBoxLeft } from "../ProjectBox/ProjectBoxLeft";
import { Grid, Hidden } from "@mui/material";
import { BlobLink } from "../BlobLink";

import { ScreenShot } from "./components/ScreenShot";
import { GridContainer } from "./components/GridContainer";
import { GridDescContainer } from "./components/GridDescContainer";

import Lingrss1 from "../imgs/lingss1.mov";
import Lingrss2 from "../imgs/lingss2.mov";
import Lingrss3 from "../imgs/lingss3.mov";
import Lingrss4 from "../imgs/lingss4.mov";
import Lingrss5 from "../imgs/lingss5.mov";

export const Lingr = () => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "200px" }}>
      <ProjectBoxLeft
        desc="Lingr is a microblogging site for language learners"
        url="https://lingr.netlify.app"
        hidereadmore
      />

      <GridDescContainer rowReverse>
        <Grid item xs={12}>
          <center>
            <span style={{ fontSize: "20px" }}>
              Lingr is a microblogging site for language learners. It allows
              users to write short messages in a language they’re learning and
              have native speakers correct them or interact with them.
            </span>
          </center>
        </Grid>

        <Grid item xs={12}>
          It is built using the <b>MERN stack, with JWT authentication</b>.
          <br />
          <br />
        </Grid>

        <Grid item xs={12}>
          <center>
            It's <b>live</b>
            <a href="https://lingr.netlify.app/" target="_blank">
              <BlobLink content="here" width={45} colour="#8bd3dd" />
            </a>
            and on <b>GitHub</b>
            <a
              href="https://github.com/gordonmaloney/lingr-mern"
              target="_blank"
            >
              <BlobLink content="here" width={45} colour="#8bd3dd" />
            </a>
          </center>{" "}
        </Grid>

        <Grid item xs={12}>
          This project was <b>awarded</b> with{" "}
          <u>
            <a
              href="https://www.nucamp.co/blog/project-spotlight-gordon-maloney-microblogging"
              target="_blank"
            >
              Honors for the full-stack portion
            </a>
          </u>{" "}
          of the NuCamp bootcamp.
        </Grid>
      </GridDescContainer>

      <GridContainer row first>
        <Grid item xs={12} sm={4}>
          Users can post messages, and then reply to others, with the option to
          correct mistakes they've made.
        </Grid>
        <Grid item xs={12} sm={8}>
          <ScreenShot video src={Lingrss5} rotate="2" />
        </Grid>
      </GridContainer>

      <GridContainer rowReverse>
        <Grid item xs={12} sm={3}>
          Then you get notified when people reply to your Lings.
        </Grid>
        <Grid item xs={12} sm={9}>
          <ScreenShot video src={Lingrss4} rotate="-1" />
        </Grid>
      </GridContainer>

      <GridContainer row>
        <Grid item xs={12} sm={4}>
          Each user also has a unique phrasebook, where they can keep track of
          words they want to remember:
        </Grid>
        <Grid item xs={12} sm={8}>
          <ScreenShot video src={Lingrss3} rotate="3" />
        </Grid>
      </GridContainer>

      <GridContainer rowReverse>
        <Grid item xs={12} sm={5}>
          Users can edit and delete entries to their phrasebook, and at any point they can download it as a spreadsheet.
        </Grid>
        <Grid item xs={12} sm={7}>
          <ScreenShot video src={Lingrss1} rotate="-2" />
        </Grid>
      </GridContainer>

      <GridContainer row>
        <Grid item xs={12} sm={6}>
          Lings can also be filtered by language.
        </Grid>
        <Grid item xs={12} sm={6}>
          <ScreenShot video src={Lingrss2} rotate="5" />
        </Grid>
      </GridContainer>
    </div>
  );
};
