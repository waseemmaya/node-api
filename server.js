const express = require("express");
const path = require("path");
var cors = require("cors");
const app = express();
const mongoose = require("./config/db");

// app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
app.use(express.json());

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("<===============Mongo DB running==============>");
});

app.use("/", require("./routes/index.js"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`=======> My Server is running on port ${port} <=======`);
});
