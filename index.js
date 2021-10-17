const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/register", (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    // const { username, password } = req.body;
    console.log(username, password);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

app.get("/", (req, res) => {
  res.send("Get Request reached!!");
});

app.listen(PORT, () => {
  console.log("Listening to 5000");
});
