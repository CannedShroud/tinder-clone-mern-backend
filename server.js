// imports
import express from "express";
import mongoose from "mongoose";

// config
const app = express();
const port = process.env.PORT || 4000;

// midwares

// db conigs

// routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// listen
app.listen(port, () => {
  console.log("====================================");
  console.log("Server started on port ->", port);
  console.log("====================================");
});
