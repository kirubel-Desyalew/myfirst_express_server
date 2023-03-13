const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("<h1>hello,world</>");
});

app.get("/contact", function (req, res) {
  res.send("contact me at kirudesyalew@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Hey there,IO am KIRUBEL a FullStack Developer from Ethiopia");
});

app.listen(3000, function () {
  console.log("server startesd at port 3000");
});
