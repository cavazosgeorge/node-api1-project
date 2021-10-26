const express = require("express");
const router = express.Router();

// IMPORTING USERS CONTROLLER METHODS

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
} = require("../controllers/usersController");

router.route("/users").get(getUsers);

router.route("/users/:id").get(getUser);

router.route("/users").post(createUser);

router.route("/users/:id").put(updateUser);

module.exports = router;
