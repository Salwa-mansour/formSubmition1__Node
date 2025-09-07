const express =require('express');
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");


router.get('/', (req, res) => {
    userController.getAllUsers(req,res)
});
router.get('/form',(req, res) => {
    userController.getUsersForm(req,res)
});
module.exports = router;