const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer")
const validator = require("../middlewares/validator")

const userController = require("../controller/userController");

//USUARIOS

//Creación de usuarios
router.get('/register', userController.register);
router.post('/register', upload.single("avatar"), validator , userController.registerPost);

router.get('/login', userController.login);

module.exports=router;