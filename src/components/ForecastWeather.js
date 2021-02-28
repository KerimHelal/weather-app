import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import moment from "moment";
import TabPanel from "./TabPanel";
import WeatherColumn from "./WeatherColumn";
import { displayTemperatureBasedOnUnit } from "../helpers/WeatherMethods";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  largeText: {
    fontSize: "70px",
  },
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const ForecastWeather = ({ dailyWeather, hourlyWeather, unit }) => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const [portionTab, setPortionTab] = React.useState(0);

  const handleChange = (event, newValue, type) => {
    if (type === "tab") {
      setTab(newValue);
    } else if (type === "portionTab") {
      setPortionTab(newValue);
    }
  };

  const renderHourlyWeather = () => {
    let items = [];
    let finish = 8;
    console.log(hourlyWeather.data);
    const tabsNumber = Math.ceil((hourlyWeather.data || []).length / 8);

    for (let i = 0; i < tabsNumber; i++) {
      items.push(
        <TabPanel
          style={{ padding: 0 }}
          flex
          value={portionTab}
          index={i}
          noPadding
        >
          {((hourlyWeather.data || []).slice(i * 8, finish) || []).map(
            (day, j) => (
              <WeatherColumn
                time={i === 0 ? "Now" : moment.unix(day.time).format("HH:mm")}
                icon={day.icon}
                temp={displayTemperatureBasedOnUnit(unit, day.temperature)}
              />
            )
          )}
        </TabPanel>
      );
      finish += 8;
    }
    return items;
  };

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={12}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Tabs
            value={tab}
            onChange={(e, newValue) => handleChange(e, newValue, "tab")}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Hourly" {...a11yProps(0)} />
            <Tab label="Daily" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={tab} index={0}>
          <div>{renderHourlyWeather()}</div>
          <AppBar position="static" color="transparent" elevation={0}>
            <Tabs
              value={portionTab}
              onChange={(e, newValue) =>
                handleChange(e, newValue, "portionTab")
              }
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab {...a11yProps(0)} />
              <Tab {...a11yProps(1)} />
              <Tab {...a11yProps(2)} />
              <Tab {...a11yProps(3)} />
              <Tab {...a11yProps(4)} />
              <Tab {...a11yProps(5)} />
              <Tab {...a11yProps(6)} />
            </Tabs>
          </AppBar>
        </TabPanel>
        <TabPanel flex value={tab} index={1}>
          {(dailyWeather.data || []).map((day, i) => (
            <WeatherColumn
              time={moment.unix(day.time).format("dddd")}
              icon={day.icon}
              temp={displayTemperatureBasedOnUnit(unit, day.temperatureHigh)}
            />
          ))}
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default ForecastWeather;
