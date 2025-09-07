
const getAllUsers = (req,res)=>{

     res.render("index");
  }

const getUsersForm = (req,res)=>{
    res.render("form");
}

  module.exports = {
    getAllUsers,
   getUsersForm
  
}