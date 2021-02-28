import axios from "axios";

export const getCurrentWeather = async (location) => {
  try {
    return axios
      .get(
        `http://localhost:8080/getWeather/${location.latitude}/${location.longitude}`
      )
      .then((res) => res.data);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const displayTemperatureBasedOnUnit = (unit, temp) => {
  if (unit === "C") {
    return Math.round((5 / 9) * (temp - 32));
  }
  return temp;
};
