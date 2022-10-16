const express = require("express");
const cors = require("cors");
const axios = require("axios");
const url = require("url");

const expressApp = express();
expressApp.use(express.json());

expressApp.use(cors());

expressApp.post("/get", async (req, res) => {
  try {
    url.parse(req.body.url);
    const response = await axios({
      method: "get",
      url: req.body.url,
      headers: req.body.headers,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    if (err.response) {
      console.error(err.response);
      res.status(err.response.status).json({ apiErr: err.response.data });
    } else {
      console.error(err);
      res.status(500).json({ stdErr: err.code });
    }
  }
});

expressApp.post("/post", async (req, res) => {
  try {
    url.parse(req.body.url);
    const response = await axios({
      method: "post",
      url: req.body.url,
      headers: req.body.headers,
      data: req.body.data,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    if (err.response) {
      console.error(err.response);
      res.status(err.response.status).json({ apiErr: err.response.data });
    } else {
      console.error(err);
      res.status(500).json({ stdErr: err.code });
    }
  }
});

module.exports = expressApp;
