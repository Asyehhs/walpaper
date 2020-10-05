const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const runfile = require("./runfile");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/start", (req, res) => {
  const body = req.body;
  if (body) {
    if ("path" in body) {
      runfile(body.path)
        .then(() => {
          res.status(200);
        })
        .catch((err) => {
          res.status(404).json({ err: err });
        });
      res.status(200);
    } else {
      res.status(404).json({
        message: "not path",
      });
    }
  } else {
    res.status(404).json({
      message: "not arguments",
    });
  }
});

app.listen(3001, () => {});
