const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const { ORIGIN_URL = "http://localhost:3000" } = process.env || {};

const masterRoute = require('../routes');

module.exports = () => {
  const app = express();

  app.use(
    cors({
      credentials: true,
      origin: [ORIGIN_URL]
    })
  );

  app.use(helmet());

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/', masterRoute());

  return app;
}
