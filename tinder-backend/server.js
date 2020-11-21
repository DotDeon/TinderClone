import express from "express";
import mongoose from "mongoose";
import Cards from "./dbcards.js";
import Cors from "cors";
// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:xutSdkrwbJJh3MwR@cluster0.dpvvi.mongodb.net/swipedb?retryWrites=true&w=majority`;

//Middlewares
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(
  connection_url,

  {
    userNewURLParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true,
  }
);

//xutSdkrwbJJh3MwR

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Deon"));
app.post("/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(err);
    }
  });
});

app.get("/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listining on Localhost: ${port}`));
