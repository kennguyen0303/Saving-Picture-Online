var express = require("express");
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
var imgur = require("imgur");

app.use(cors());
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

imgur.setClientId("6c5d0953c4d9f7f");//new id 
//old id 0fa8ed7ab0feaef

// mongoose.connect(
//   "mongodb+srv://admin:123a456@cluster0-zh8jg.mongodb.net/test?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );

mongoose.connection
  .once("open", () => console.log("Connected to the database"))
  .on("error", error => {
    console.log(error);
  });

app.get("/image", (req, res) => {
  console.log("HEY");
});

app.post("/image", (req, res) => {
  imgur
    .uploadBase64(req.body.imabeBase64)
    .then(function(json) {
      console.log(json.data.link);
    })
    .catch(function(err) {
      console.error(err.message);
    });
});

app.listen(30000, process.env.IP, () => {
  console.log("Connected");
});
