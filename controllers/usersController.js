const Users = require("../api/users/model");

// METHOD(GET) GET ALL USERS => /API/USERS
exports.getUsers = async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    success: true,
    results: users.length,
    data: users,
  });
};
// METHOD(POST) CREATE A USER => /API/USERS

// METHOD(GET) GET USER BY ID => /API/USERS/:ID

// METHOD(DEL) DELETE A USER BY ID => /API/USERS/:ID

// METHOD(PUT) UPDATES A USERD BY ID => /API/USERS:ID
