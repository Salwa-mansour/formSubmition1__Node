//const usersStorage = require("../storages/usersStorage");

// This just shows the new stuff we're adding to the existing contents
const { body, validationResult } = require("express-validator");
const db = require("../db/queries");


const textValidatore = function(item){
  return [body(item).trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`)]
}



async function usersListGet(req, res){

  const usernames = await db.getAllUsernames();
 

  res.render("index", {
    title: "User list",
    users: usernames,
  });
}

function usersCreateGet(req, res) {
  res.render("createUser", {
    title: "Create user",
  });
}

async function usersCreatePost(req, res){

  //  const errors =  this.textValidatore(req.body.firstName);
  //  console.log(errors)
  //   if (!errors.isEmpty()) {
  //     return res.status(400).render("createUser", {
  //       title: "Create user",
  //       errors: errors.array(),
  //     });
  //   }
    const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

module.exports = {
  usersListGet,
  usersCreateGet,
  usersCreatePost
}