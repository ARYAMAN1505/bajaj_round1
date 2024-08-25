require("dotenv").config();

const { PORT = 8000 } = process.env || {};
// Package Import and variable initializations

const setupExpress = require('./services/express');
const app = setupExpress();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});