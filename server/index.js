const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const weatherRoutes = express.Router();
const fetch = require("node-fetch");

app.use(cors());
app.use(bodyParser.json());

weatherRoutes.route("/getWeather/:lat/:long").get(function (req, res) {
  fetch(
    `https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${req.params.lat},${req.params.long}`
  )
    .then((data) => data.json())
    .then((data) => res.status(200).json(data));
});

app.use("/", weatherRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
