//set port number
const port = process.env.PORT || 2000;
//import and set up express server
const express = require("express");
const app = express();
//body parser -> may not be required
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//passport. delete unless necessary
const passport = require("passport");
//make login page available
app.use(express.static("public"));
//serve index file
app.get("/", (req, res) => res.send("./index.html"));
// check login.
app.post("/submit-form", (req, res) => {
  const password = req.body.password;
  console.log(password);
  if (password === "website@123") {
    //if successful make assets available
    app.use(express.static("assets"));
    //load fist main page for authenticated users. it will be avilable henceforth till server sleeps
    res.redirect("./main.html");
  } else {
    res.redirect("/");
  }
});
app.listen(port);
