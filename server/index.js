const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config;

const app = express();

app.use(express.json);
const PORT = process.env.PORT || 5500;

const GifItemRoute = require("./routes/gifRoutes");
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.use("/", GifItemRoute);
app.listen(PORT, () => console.log("server connected"));
