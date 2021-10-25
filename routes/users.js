const express = require("express");
const router = express.Router();

// IMPORTING USERS CONTROLLER METHODS

const { getUsers, getUser } = require("../controllers/usersController");

router.route("/users").get(getUsers);

router.route("/users/:id").get(getUser);

module.exports = router;
