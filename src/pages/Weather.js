import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Navbar from "../components/Navbar";
import CurrentWeather from "../components/CurrentWeather";
import ForecastWeather from "../components/ForecastWeather";
import { getCurrentWeather } from "../helpers/WeatherMethods";

const Weather = () => {
  const [unit, setUnit] = useState("F");
  const [weather, setWeather] = useState({
    currently: {},
    daily: {},
    hourly: {},
  });
  const [city, setCity] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const fetchedWeather = await getCurrentWeather({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        setWeather(fetchedWeather);

        fetch(
          "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=30.037429713596946&longitude=31.34&localityLanguage=en"
        )
          .then((data) => data.json())
          .then((city) => {
            setCity(city.locality);
            setLoading(false);
          });
      },
      (error) => {
        //Alert.error(error.message);
      }
    );
  }, []);
  return (
    <Container maxWidth="lg">
      {loading ? (
        <CircularProgress size={200} />
      ) : (
        <>
          <Navbar unit={unit} setUnit={setUnit} />
          <CurrentWeather
            city={city}
            weather={weather.currently}
            summary={weather.hourly}
            unit={unit}
          />
          <ForecastWeather
            dailyWeather={weather.daily}
            hourlyWeather={weather.hourly}
            unit={unit}
          />
        </>
      )}
    </Container>
  );
};

export default Weather;
