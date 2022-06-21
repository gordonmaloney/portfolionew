import { Grid } from "@mui/material";
import React from "react";

export const GridContainer = ({ children, row, rowReverse, first }) => {
  return (
    <Grid
      container
      spacing={2}
      className="projectDescGrid"
      direction={row ? "row" : rowReverse ? "row-reverse" : "row"}
      alignItems="center"
    >
      {first && (
        <Grid item xs={12}>
          <h3>Feature highlight:</h3>
        </Grid>
      )}
      {children}
    </Grid>
  );
};
