const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var HostInfo = require("../db/hostInfo.js");


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/hostInfo");
// findAll retrieves all authors
app.get("/hostInfo", (req, res) => {
  HostInfo.find().exec((err, list) => {
    if (err) {
      res.send(err);
    } else {
      console.log(res.status)
      res.json(list);
      res.status(200);
    }
  });
});

app.use(express.static(__dirname + "/../client/dist"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


module.exports = app;