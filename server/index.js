const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); 
app.use(express.json());

const INTER = require("./inter.js");

app.get("/template/:name", (req, res) => {
  const { name } = req.params;
  const template = INTER.getTemplate(name);
  res.send(template);
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});