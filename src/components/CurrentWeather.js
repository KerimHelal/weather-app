import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { displayTemperatureBasedOnUnit } from "../helpers/WeatherMethods";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 120,
  },
  largeText: {
    fontSize: "70px",
  },
}));

const CurrentWeather = ({ city, weather, summary, unit }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item lg={9}>
        <h1>{city}</h1>
        <h3>
          {new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(
            new Date()
          )}
        </h3>
        <img
          src={`https://darksky.net/images/weather-icons/${weather.icon}.png`}
          alt="weather-icon"
          width="120"
        />
        <h2>{weather.summary}</h2>
      </Grid>
      <Grid item lg={3}>
        <h1 className={classes.largeText}>{weather.temperature}&deg;</h1>
        <h1>
          {displayTemperatureBasedOnUnit(unit, weather.apparentTemperature)}
          &deg; / {displayTemperatureBasedOnUnit(unit, weather.dewPoint)}&deg;
        </h1>
        <h2>{summary.summary}</h2>
      </Grid>
    </Grid>
  );
};

export default CurrentWeather;
