require("dotenv").config();
const express = require("express");
const port = 4000;
const router = require("./router");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Romanus is Aweosome");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`port is up and running`);
});
