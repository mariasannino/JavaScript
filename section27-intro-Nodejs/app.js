const express = require("express");
const bodyParser = require("body-parser");
const locationRoutes = require("./routes/location");
const app = express();
/* 
app.set("view engine", "ejs");
app.set("views", "views"); */

app.use(bodyParser.json());
app.use(locationRoutes);
/* 
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

// Route to render the initial form
app.get("/", (req, res) => {
  res.render("index", {
    user: "Unknown User",
  });
});

// Route to handle form submission
app.post("/submit", (req, res) => {
  const userName = req.body.username || "Unknown User";
  res.render("index", {
    user: userName,
  });
}); */

app.listen(3000);
