module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  // router.post("/", users.create);

  // // Retrieve all users
  // router.get("/", users.findAll);

  // Retrieve a single user with id
  router.get("/code/:code", users.findOne);

  app.use('/api/users', router);
};
