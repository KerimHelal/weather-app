const WeatherColumn = ({ time, icon, temp }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ textAlign: "center" }}>{time}</h2>
      <img
        src={`https://darksky.net/images/weather-icons/${icon}.png`}
        alt="weather-icon"
        width="70"
      />
      <h3 style={{ textAlign: "center" }}>{temp}&deg;</h3>
    </div>
  );
};

export default WeatherColumn;
