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
