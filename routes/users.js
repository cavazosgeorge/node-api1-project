const express = require("express");
const router = express.Router();

// IMPORTING USERS CONTROLLER METHODS

const { getUsers } = require("../controllers/usersController");

router.route("/users").get(getUsers);

module.exports = router;
