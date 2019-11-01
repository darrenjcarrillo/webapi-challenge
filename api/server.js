// Imports
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");

// Routes
const projectModel = require("./routes/PROJECTS_router");
const actionModel = require("./routes/ACTION_router");

// Server
const server = express();

// Use Middleware
server.use(express.json(), helmet());

// Root Route
server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

// Use Routes
server.use("/projects", projectModel);
server.use("/action/", actionModel);

// Export
module.exports = server;
