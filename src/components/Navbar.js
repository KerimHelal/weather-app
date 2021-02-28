import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  flex: {
    display: "flex",
  },

  toggleButton: {
    padding: "2px 25px",
    fontSize: "24px",
    border: 0,
    color: "white",
  },
  toggleButtonSelected: {
    background: "rgba(255, 255, 255, 0.25) !important",
    borderRadius: 0,
    borderLeft: "2px solid white !important",
    color: "white !important",
  },
}));

const Navbar = ({ unit, setUnit }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={10}>
        <h1>INSTAWEATHER</h1>
      </Grid>
      <Grid item xs={2} className={classes.flex}>
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={(e, unit) => setUnit(unit)}
          aria-label="text alignment"
        >
          <ToggleButton
            value="C"
            aria-label="centered"
            classes={{
              root: classes.toggleButton,
              selected: classes.toggleButtonSelected,
            }}
          >
            <span>C</span>
          </ToggleButton>
          <ToggleButton
            value="F"
            aria-label="centered"
            classes={{
              root: classes.toggleButton,
              selected: classes.toggleButtonSelected,
            }}
          >
            <span>F</span>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Navbar;
