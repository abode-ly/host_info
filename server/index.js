const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var  db= require("../db/hostInfo.js");
var router = express.Router();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/hostInfo");
// findAll retrieves all authors
app.get("/hostInfo", (req, res) => {
  db.find({}).exec((err, books) => {
    if (err) {
      res.send("error");
    } else {
      res.json(books);
    }
  });
});

// findOne will retrieve the author details associated with the given id
app.get("/hostInfo/:id", (req, res) => {
  db.findOne({
    _id: req.params.id
  }).exec((err, book) => {
    if (err) {
      res.send("error");
    } else {
      res.json(book);
    }
  });
});
// insertOne inserts a author into the db
// app.post("/hostInfo/post", (req, res) => {
//   db.create(req.body, (err, book) => {
//     if (err) {
//       res.send("error");
//     } else {
//       res.send(book);
//     }
//   });
// });
// insertOne inserts a author into the db
// app.put("/delete", (req, res) => {
//   db.remove({}, err => {
//     if (err) {
//       res.send("error");
//     } else {
//       res.end("success");
//     }
//   });
// });

app.use(express.static(__dirname + "/../client/dist"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
