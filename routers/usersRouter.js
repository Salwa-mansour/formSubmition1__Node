const express =require('express');
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");


// router.get('/', (req, res) => {
//     userController.getAllUsers(req,res)
// });
// router.get('/form',(req, res) => {
//     userController.getUsersForm(req,res)
// });
router.get("/", userController.getAllUsers);
router.get("/form{/:id}", userController.userUpdateGet);
router.post("/form/:id", userController.userUpdatePost);

module.exports = router;