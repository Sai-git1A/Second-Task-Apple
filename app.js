//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
//const mongoURL = "mongodb://localhost://27017";
const mongoURL = "mongodb+srv://saiuser:sai123@cluster0.k2vj3ey.mongodb.net/?retryWrites=true&w=majority";
let db;

app.use(express.static("files"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Latest Products
app.get("/latestProducts", function(req, res) {
  db.collection('latestProducts').find().toArray(function(err, result) {
    res.send(result);
  });
});

// Latest Products 2
app.get("/latestProducts2", function(req, res) {
  db.collection('latestProducts2').find().toArray(function(err, result) {
    res.send(result);
  });
});

// Accessories
app.get("/accessories", function(req, res) {
  db.collection('accessories').find().toArray(function(err, result) {
    res.send(result);
  });
});

// Audio Devices
app.get("/audioDevices", function(req, res) {
  db.collection('audioDevices').find().toArray(function(err, result) {
    res.send(result);
  });
});

// Apple TV+
app.get("/appleTv", function(req, res) {
  db.collection('appleTv').find().toArray(function(err, result) {
    res.send(result);
  });
});

// Apple Music
app.get("/appleMusic", function(req, res) {
  db.collection('appleMusic').find().toArray(function(err, result) {
    res.send(result);
  })
});

// Apple Acrade
app.get("/appleAcrade", function(req, res) {
  db.collection('appleAcrade').find().toArray(function(err, result) {
    res.send(result);
  });
});

// Apple Podcasts
app.get("/applePodcasts", function(req, res) {
  db.collection('applePodcasts').find().toArray(function(err, result) {
    res.send(result);
  });
});

mongoClient.connect(mongoURL, function(err, client) {
  if (err) console.log("Error");
  db = client.db('apple');
  app.listen(process.env.PORT || 5000, function() {
    console.log("Server started at port 5000...");
  });
})
