const { body, validationResult } = require("express-validator");

const usersStorage = require("../storages/usersStorage");

[
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Name can not be empty.")
    .isAlpha()
    .withMessage("Name must only contain alphabet letters."),  
];

// const controller = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).render("index", {
//       errors: errors.array(),
//     });
//   }

//   // do stuff if successful
//   res.redirect("/index");
// };

const userUpdateGet = (req, res, next) => {
   res.render("form", {
    title: "Create user",
    user:{
      id:req.params.id || crypto.randomUUID()
    }
  });
};
const userUpdatePost = (req, res, next) => {
  const { id,firstName, lastName } = req.body;
  usersStorage.addUser({ id,firstName, lastName });
  res.redirect("/");
};

const getAllUsers = (req,res)=>{

     res.render("index",{
    title: "User list",
    users: usersStorage.getUsers(),
  });
  }

const getUsersForm = (req,res)=>{
    res.render("form");
}


module.exports = {
    getAllUsers,
   getUsersForm,
   userUpdateGet,
   userUpdatePost
  
}