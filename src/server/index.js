var express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
var app = express();

app.use(express.json());
app.use(cors());

app.get("/*", (req, res) => {
  let urlToHit = new URL(req.url.slice(1));
  let originToHit = urlToHit.origin;
  req.headers.origin = originToHit;
  req.headers.host = urlToHit.hostname;
  req.url = urlToHit.toString();

  axios
    .get(req.url, {
      headers: req.headers,
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(err.response.data.code);
      res.send(err.response.data);
    });
});

app.post("/*", (req, res) => {
  let urlToHit = new URL(req.url.slice(1));
  let originToHit = urlToHit.origin;
  req.headers.origin = originToHit;
  req.headers.host = urlToHit.hostname;
  req.url = urlToHit.toString();

  axios
    .post(req.url, req.body, {
      headers: req.headers,
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(err.response.data.code);
      res.send(err.response.data);
    });
});

app.listen(8080, function () {
  console.log("listening on port 8080");
});
