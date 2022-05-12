import React, {useEffect, useState} from 'react'
import { Grid } from '@mui/material'
import { Blob } from '../Blob'
import { SquareBlob } from '../SquareBlob'
import { Hidden } from '@mui/material'

export const ProjectBoxRight = ({desc, url}) => {

    
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
    
    <Grid container alignItems={"center"}     style={{
      marginBottom: screenWidth.width > 900 ? 0 : "20px"
    }}>
            
    <Hidden mdUp>
  <Grid
      item
      xs={8}
      sm={6}
      md={0}
      style={{ zIndex: 5, display: "flex", justifyContent: "flex-end" }}
    >
      <div
        style={{
          position: "relative",
          width: "105%",
          maxWidth: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          pointerEvents: "none",
          marginBottom: screenWidth.width > 900 ? 0 : "-45px"
        }}
      >
        <Blob colour="#001858" radius={95} squash={1} />
        <p className="projectDesc"><span className="projectDescHighlight" >
{desc}          <br />
          <br />
          read more
        </span>
        </p>
      </div>
    </Grid>
    </Hidden>

    <Grid item xs={12} md={8}>
      <div
        style={{
          width: "100%",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <SquareBlob
          colour="#8bd3dd"
          radius={90}
          squash={1}
          squareScale={
            screenWidth.width > 800
              ? 1
              : screenWidth.width > 400
              ? 2 - (screenWidth.width / 100 / 4 - 1)
              : 2
          }
        />

        <div style={{ width: "100%" }} className="iframeWrap">
          <iframe
            className="scaled-frame"
            src={url}
          ></iframe>
        </div>
      </div>
    </Grid>


<Hidden mdDown >
    <Grid
      item
      xs={0}
      md={4}
      style={{ zIndex: 5, display: "flex", justifyContent: "flex-start" }}
    >
      <div
        style={{
          position: "relative",
          width: "105%",
          maxWidth: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          pointerEvents: "none",
        }}
      >
        <Blob colour="#001858" radius={95} squash={1} />
        <p className="projectDesc"><span className="projectDescHighlight" >
{desc}          <br />
          <br />
          read more
        </span>
        </p>
      </div>
    </Grid>
    </Hidden>
  </Grid>
  )
}
