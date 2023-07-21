// import some node modules for later

const express = require("express");
const cors = require("cors");
const fs = require("node:fs");
const path = require("node:path");
const routes = require("./routes/index");

// // create express app

const app = express();

app.use(express.json());
app.use(cors());

// import and mount the API routes
app.use("/", routes);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public"))); // TODO

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
); // TODO

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources
  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));
  // redirect all requests to the REACT index file
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
} // TODO

// ready to export

module.exports = app;
