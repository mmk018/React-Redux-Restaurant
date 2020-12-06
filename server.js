const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const menu = require("./src/menu");
const cors = require("cors");
app.use(cors());
app.get("/menu", (req, res) => {
  res.send(menu);
});

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
