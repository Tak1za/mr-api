const express = require("express");
const cors = require("cors");
const axios = require("axios");

const expressApp = express();
expressApp.use(express.json());

expressApp.use(cors());

expressApp.post("/get", async (req, res) => {
  console.log(req.body);
  try {
    let response = await axios({
      method: "get",
      url: req.body.url,
      headers: req.body.headers,
    });
    res.status(response.status).json(response.data).header(response.headers);
  } catch (err) {
    if (err.response) {
      res
        .status(err.response.status)
        .json({ message: err.response.data })
        .header(err.response.headers);
    }
  }
});

expressApp.post("/post", async (req, res) => {
  console.log(req);
  let response;
  try {
    response = await axios({
      method: "post",
      url: req.body.url,
      headers: req.body.headers,
      data: req.body.data,
    });
    res.status(response.status).json(response.data).header(response.headers);
  } catch (err) {
    if (err.response) {
      res
        .status(err.response.status)
        .json({ message: err.response.data })
        .header(err.response.headers);
    }
  }
});

module.exports = expressApp;
