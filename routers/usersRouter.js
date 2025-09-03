const express =require('express');
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");


router.get('/', (req, res) => {
    userController.getAllUsers(req,res)
});

module.exports = router;