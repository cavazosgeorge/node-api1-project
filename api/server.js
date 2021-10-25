// BUILD YOUR SERVER HERE
const express = require("express");
const server = express();

const dotenv = require("dotenv");

// SETUP CONFIG FILE VARIABLES
dotenv.config({
  path: "./config/config.env",
});

// BODY PARSER
server.use(express.json());

// IMPORTING ALL ROUTES
const users = require("../routes/users");

server.use("/api", users);

module.exports = server; // EXPORT YOUR SERVER instead of {}
