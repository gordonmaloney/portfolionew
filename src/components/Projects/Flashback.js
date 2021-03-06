import React from "react";
import { ProjectBoxLeft } from "../ProjectBox/ProjectBoxLeft";
import { Grid, Hidden } from "@mui/material";
import { BlobLink } from "../BlobLink";
import { ScreenShot } from "./components/ScreenShot";
import { GridContainer } from "./components/GridContainer";
import { GridDescContainer } from "./components/GridDescContainer";

import Fbss1 from "../imgs/fbss1.png";
import Fbss2 from "../imgs/fbss2.mov";
import Fbss3 from "../imgs/fbss3.mov";

export const Flashback = () => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "200px" }}>
      <ProjectBoxLeft
        desc="Flashback is a spaced-repetition flashcard app for memorising anything"
        url="https://flashbackflashcards.netlify.app"
        hidereadmore
      />

      <GridDescContainer rowReferse>
        <Grid item xs={12}>
          <center>
            <span style={{ fontSize: "20px" }}>
              Flashback is a spaced-repetition flashcard app for memorising
              anything, in the most efficient way possible.
            </span>
          </center>
        </Grid>

        <Grid item xs={12}>
          Built using the MERN stack, Flashback uses a{" "}
          <b>spaced-repetition algorithm</b> to determine the most efficient
          order for users to practice vocabulary or anything else they're trying
          to memorise.
          <br />
          <br />
          Users are given a unique log-in code when setting up their account,
          and can access their cards from anywhere.
          <br />
          <br />
          <center>
            It's <b>live</b>
            <a href="https://flashbackflashcards.netlify.app/" target="_blank">
              <BlobLink content="here" width={45} colour="#8bd3dd" />
            </a>
            and on <b>GitHub</b>
            <a
              href="https://github.com/gordonmaloney/Flashback"
              target="_blank"
            >
              <BlobLink content="here" width={45} colour="#8bd3dd" />
            </a>
          </center>{" "}
        </Grid>
      </GridDescContainer>

      <GridContainer rowReverse first>

        <Grid item xs={12} md={5}>
          When a user marks a card as correct during a study session, it updates
          two properties: <span className="code">delay</span> - how long until
          the card is next shown, and <span className="code">date</span> - the
          date the card is next shown. The <span className="code">delay</span>{" "}
          property is used to gradually increase the amount of time between
          revisions - though it is reset if the user gets it wrong.
        </Grid>
        <Grid item xs={12} md={7}>
          <ScreenShot img src={Fbss1} rotate="-5" />
        </Grid>
      </GridContainer>

      <GridContainer row>
        <Grid item xs={12} sm={6}>
          The app keeps track of the user's streak - incrementing by one if the
          user studies the day after their previous session, but resetting if
          you miss a day.
        </Grid>
        <Grid item xs={12} sm={6}>
          <ScreenShot video src={Fbss3} rotate="4" />
        </Grid>
      </GridContainer>

      <GridContainer rowReverse>
        <Grid item xs={12} sm={2}>
          Users can add cards, and then edit or remove them from their deck.
        </Grid>
        <Grid item xs={12} sm={10}>
          <ScreenShot video src={Fbss2} rotate="-2" />
        </Grid>
      </GridContainer>
    </div>
  );
};
