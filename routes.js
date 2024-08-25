const express = require('express');

const masterRouter = express.Router();

const bhflRoutes = require('./modules/bhfl/bhflRoutes');

module.exports = () => masterRouter
  .use('/bfhl', bhflRoutes())
  .get('/', (req, res) => {
    console.log("All routes are online!");
    res.status(200).send("Server is Up and Running!");
  }).all('*', (req, res) => {
    // eslint-disable-next-line no-undef
    console.log("Route Does not exist!");
    res.sendStatus(404);
  });