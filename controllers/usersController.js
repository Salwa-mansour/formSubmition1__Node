const usersStorage = require("../storages/usersStorage");

// This just shows the new stuff we're adding to the existing contents
const { body, validationResult } = require("express-validator");


exports.textValidatore = function(item){
  return [body(item).trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`)]
}
exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

exports.usersCreatePost = (req, res) => {

  //  const errors =  this.textValidatore(req.body.firstName);
  //  console.log(errors)
  //   if (!errors.isEmpty()) {
  //     return res.status(400).render("createUser", {
  //       title: "Create user",
  //       errors: errors.array(),
  //     });
  //   }
  const { firstName, lastName } = req.body;
  usersStorage.addUser({ firstName, lastName });
  res.redirect("/");
};
