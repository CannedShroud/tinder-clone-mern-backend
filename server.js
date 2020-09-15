// imports
import express from "express";
import mongoose from "mongoose";

// config
const app = express();
const port = process.env.PORT || 4000;
const connection_url =
  "mongodb+srv://admin:mixedfruit@cluster0.uvuef.mongodb.net/tinderDB?retryWrites=true&w=majority";

// midwares

// db conigs
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

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
