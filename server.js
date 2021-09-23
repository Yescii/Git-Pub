const express = require("express");
const app = express();
const port = 3000;
const drinks = require("./models/drinks");
const foods = require("./models/food");

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("drinks_index.ejs", { drinks: drinks });
});

// app.get("/drinks/:id", (req, res) => {
//   res.render("drinks_show.ejs", { index: req.params.id });
// });

app.get("/drinks/:id", (req, res) => {
  res.render("drinks_show.ejs", { drink: drinks[req.params.id] });
});

app.get("/foods", (req, res) => {
  res.render("food_index.ejs", { foods: foods });
});

app.get("/foods/:id", (req, res) => {
  res.render("food_show.ejs", { food: foods[req.params.id] });
});
app.listen(port, () => {});
