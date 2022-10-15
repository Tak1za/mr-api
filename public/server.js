const express = require("express");
const cors = require("cors");
const axios = require("axios");

const expressApp = express();
expressApp.use(express.json());

expressApp.use(cors());

expressApp.post("/get", async (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  let response;
  try {
    response = await axios({
      method: "get",
      url: req.body.url,
      headers: req.body.headers,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(response.status).json({ message: err });
  }
});

expressApp.post("/post", async (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req);
  let response;
  try {
    response = await axios({
      method: "post",
      url: req.body.url,
      headers: req.body.headers,
      data: req.body.data,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(response.status).json({ message: err });
  }
});

module.exports = expressApp;
