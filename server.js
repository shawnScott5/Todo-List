const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const methodOverride = require("method-override")
const todoRoutes = require("./routes/todos");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use("/todos", todoRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });
