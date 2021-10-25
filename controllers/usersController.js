const Users = require("../api/users/model");

// METHOD(GET) GET ALL USERS => /API/USERS
exports.getUsers = async (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
      console.log(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: "error getting users",
        err: err.message,
      });
    });
};
// METHOD(POST) CREATE A USER => /API/USERS

// METHOD(GET) GET USER BY ID => /API/USERS/:ID

// METHOD(DEL) DELETE A USER BY ID => /API/USERS/:ID

// METHOD(PUT) UPDATES A USERD BY ID => /API/USERS:ID
