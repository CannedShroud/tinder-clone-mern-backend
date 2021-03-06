// imports
import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

// config
const app = express();
const port = process.env.PORT || 4000;
const connection_url =
  "mongodb+srv://admin:mixedfruit@cluster0.uvuef.mongodb.net/tinderDB?retryWrites=true&w=majority";

// midwares
app.use(express.json());
app.use(cors());

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

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });

  app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
});

// listen
app.listen(port, () => {
  console.log("====================================");
  console.log("Server started on port ->", port);
  console.log("====================================");
});
