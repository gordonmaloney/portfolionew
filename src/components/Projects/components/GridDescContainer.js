import { Grid } from "@mui/material";

export const GridDescContainer = ({ children, row, rowReverse }) => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "70%",
        minWidth: "300px",
        paddingBottom: "20px"
      }}
      direction={row ? "row" : rowReverse ? "row-reverse" : "row"}
      alignItems="center"
    >
      {children}
    </Grid>
  );
};
