import React from "react";
import { ProjectBoxLeft } from "../ProjectBox/ProjectBoxLeft";
import { Grid, Hidden } from "@mui/material";
import { BlobLink } from "../BlobLink";

import Lingss1 from '../imgs/lingss1.mov';
import Lingss2 from '../imgs/lingss2.mov';
import Lingss3 from '../imgs/lingss3.mov';
import Lingss4 from '../imgs/lingss4.mov';
import Lingss5 from '../imgs/lingss5.mov';


export const Lingr = () => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "200px" }}>
      <ProjectBoxLeft
        desc="Lingr is a microblogging site for language learners"
        title="lingr"
        url="https://lingr.netlify.app"
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
            Lingr is a microblogging site for language learners. It allows users to write short messages in a language they’re learning and have native speakers correct them or interact with them.
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
          paddingBottom: "10px"
        }}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={12}>
        <h3>Feature highlight:</h3>
        </Grid>
        <Grid item xs={12} sm={4}>
          Users can post messages, and then reply to others, with the option to correct mistakes they've made.
        </Grid>
        <Grid item xs={12} sm={8}>
          <video
         loop={true} autoPlay={true}
            src={Lingss5}
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
          paddingBottom: "10px"

        }}
        direction="row-reverse"
        alignItems="center"
      >
           <Grid item xs={12} sm={3}>
Then you get notified when people reply to your Lings.
        </Grid>
        <Grid item xs={12} sm={9}>
        <video
                  mute={true}

         loop={true} autoPlay={true}
            src={Lingss4}
            style={{
              transform: "rotate(-1deg)",
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
          paddingBottom: "20px"

        }}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          Each user also has a unique phrasebook, where they can keep track of words they want to remember:
        </Grid>
        <Grid item xs={12} sm={8}>
        <video
                  mute={true}

         loop={true} autoPlay={true}
            src={Lingss3}
            style={{
              transform: "rotate(3deg)",
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
          paddingBottom: "20px"

        }}
        direction="row-reverse"
        alignItems="center"
      >
           <Grid item xs={12} sm={5}>
And at any point, you can download your phrasebook as a spreadsheet.       </Grid>
        <Grid item xs={12} sm={7}>
        <video
                  mute={true}

         loop={true} autoPlay={true}
            src={Lingss1}
            style={{
              transform: "rotate(-1deg)",
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
          paddingBottom: "20px"

        }}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
Lings can also be filtered by language.        </Grid>
        <Grid item xs={12} sm={6}>
        <video
                  mute={true}

         loop={true} autoPlay={true}
            src={Lingss2}
            style={{
              transform: "rotate(5deg)",
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
