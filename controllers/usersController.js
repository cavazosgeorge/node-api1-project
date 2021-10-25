const Users = require("../api/users/model");

// METHOD(GET) GET ALL USERS => /API/USERS
exports.getUsers = async (req, res) => {
  Users.find()
    // .THEN => WE RECIEVED WHAT IS SUPPOSED TO BE THE CORRECT USER DATA
    .then((users) => {
      res.json(users);
      console.log(users);
    })
    // ERROR RESPONSE FOR DEVELOPER => 500 INTERNAL SERVER ERROR
    .catch((err) => {
      res.status(500).json({
        message: "error getting users",
        err: err.message,
      });
    });
};

// METHOD(POST) CREATE A USER => /API/USERS
exports.createUser = async (req, res) => {
  const user = req.body;
  // IF => ASSUMING THE CLIENT ENTERED THE USER INFORMATION INCORRECTLY
  if (!user.name || !user.bio) {
    // ERROR RESPONSE FOR CLIENT => 400 CLIENT SIDE ERROR
    res.status(400).json({
      message: "Please provide name and bio for the user",
    });
    // IF NOT => ASSUMING THE INFORMATION THE CLIENT ENTERED IS CORRECT, WE INSERT THE USER DATA
  } else {
    Users.insert(user)
      .then((createdUser) => {
        res.status(201).json(createdUser);
      })
      // ERROR RESPONSE FOR DEVELOPER => 500 INTERNAL SERVER ERROR
      .catch((err) => {
        res.status(500).json({
          message: "error creating user",
          err: err.message,
        });
      });
  }
};

// METHOD(GET) GET USER BY ID => /API/USERS/:ID
exports.getUser = async (req, res) => {
  Users.findById(req.params.id)
    // .THEN WE RECIEVED WHAT IS SUPPOSED TO BE THE CORRECT USER DATA
    .then((user) => {
      // IF => ASSUMING THE CLIENT ENTERED THE USER INFORMATION INCORRECTLY
      if (!user) {
        // ERROR RESPONSE FOR CLIENT => 404 CLIENT SIDE ERROR
        res.status(404).json({
          message: "The user with the specified ID does not exist",
        });
      }
      // IF NOT => ASSUMING THE INFORMATION THE CLIENT ENTERED IS CORRECT, WE RETURN THE USER DATA
      res.json(user);
    })
    // ERROR RESPONSE FOR DEVELOPER => 500 INTERNAL SERVER ERROR
    .catch((err) => {
      res.status(500).json({
        message: "error getting user",
        err: err.message,
      });
    });
};

// METHOD(DEL) DELETE A USER BY ID => /API/USERS/:ID

// METHOD(PUT) UPDATES A USERD BY ID => /API/USERS:ID
