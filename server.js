const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const passport = require("passport");

app.use(express.static("public"));

app.get("/", (req, res) => res.send("./index2.html"));
app.post("/submit-form", (req, res) => {
  const password = req.body.password;
  console.log(password);
  if (password === "anirav") {
    app.use(express.static("assets"));
    res.redirect("./main.html");
  } else {
    res.redirect("/");
  }
});
app.listen(2000);
