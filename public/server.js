const express = require("express");
const cors = require("cors");
const axios = require("axios");

const expressApp = express();
expressApp.use(express.json());

expressApp.use(cors());

expressApp.post("/get", async (req, res) => {
  try {
    const response = await axios({
      method: "get",
      url: req.body.url,
      headers: req.body.headers,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).json({ message: err.response.data });
    }
  }
});

expressApp.post("/post", async (req, res) => {
  try {
    const response = await axios({
      method: "post",
      url: req.body.url,
      headers: req.body.headers,
      data: req.body.data,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).json({ message: err.response.data });
    }
  }
});

module.exports = expressApp;
