import React from "react";
import { ProjectBoxLeft } from "../ProjectBox/ProjectBoxLeft";
import { Grid, Hidden } from "@mui/material";
import { BlobLink } from "../BlobLink";

import Gbss1 from "../imgs/gbss1.mp4";
import Gbss2 from "../imgs/gbss2.mp4";
import Gbss3 from "../imgs/gbss3.mp4";

export const Gobbleblog = () => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "200px" }}>
      <ProjectBoxLeft
        desc="Gobbleblog is the answer to never getting a bad takeaway twice"
        title="gobbleblog"
        url="https://gobbleblog.netlify.app"
        hidereadmore={true}
      />

      <Grid
        container
        spacing={2}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
          minWidth: "300px",
        }}
        direction="row-reverse"
        alignItems="center"
      >
        <Grid item xs={12}>
          <center>
            <span style={{ fontSize: "20px" }}>
              Gobbleblog is a platform for helping people remember which
              takeaways they’ve had and enjoyed, and which they don’t want to
              order from again.
            </span>
          </center>
        </Grid>


          <Grid item xs={12}>
          It has <b>text-to-speech</b> and <b>OCR image-to-text</b>{" "}
          functionality, including using{" "}
          <b>
            web sockets to allow desktop users to upload an image from their
            mobile.
          </b>
          <br/><br />
            <center>
              It's <b>live</b>
              <a href="https://gobbleblog.netlify.app/" target="_blank">
                <BlobLink content="here" width={45} colour="#8bd3dd" />
              </a>
              and on <b>GitHub</b>
              <a
                href="https://github.com/gordonmaloney/gobbleblog"
                target="_blank"
              >
                <BlobLink content="here" width={45} colour="#8bd3dd" />
              </a>
            </center>{" "}
          </Grid>
      </Grid>
      <br />
      <br />
      <Grid
        container
        spacing={2}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          minWidth: "320px",
          paddingBottom: "20px",
        }}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h3>Feature highlight:</h3>
        </Grid>
        
        <Grid item xs={12} xl={5}>
          When making a new entry from their computer, users can scan a QR code
          from their mobile to open a web-socket connection, that allows them to
          scan and upload the image from their phone.
        </Grid>
        <Grid item xs={12} xl={7}>

        <video
                  mute={true}

            loop={true}
            autoPlay={true}
            src={Gbss2}
            style={{
              transform: "rotate(-4deg)",
              borderRadius: "15px",
              border: "5px solid #8bd3dd",
              width: "90%",
            }}
          />

        </Grid>

      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          minWidth: "320px",
          paddingBottom: "20px",
        }}
        direction="row"
        alignItems="center"
      >

<Grid item xs={12} sm={4}>
          It has a custom-built collapsing navbar.
        </Grid>
        <Grid item xs={12} sm={8}>
          <video
                    mute={true}

            loop={true}
            autoPlay={true}
            src={Gbss1}
            style={{
              transform: "rotate(2deg)",
              borderRadius: "15px",
              border: "5px solid #8bd3dd",
              width: "90%",
            }}
          />
        </Grid>
       
      </Grid>

      <Grid
        container
        spacing={2}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          minWidth: "320px",
          paddingBottom: "20px",
        }}
        direction="row-reverse"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          Users can also take a tour to see all the site's features.
        </Grid>
        <Grid item xs={12} sm={8}>
        <video
                  mute={true}

            loop={true}
            autoPlay={true}
            src={Gbss3}
            style={{
              transform: "rotate(-4deg)",
              borderRadius: "15px",
              border: "5px solid #8bd3dd",
              width: "90%",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
