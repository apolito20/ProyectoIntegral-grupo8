const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer")
const usuariosLogueados = require("../middlewares/usuariosLogueados")
const usuarioNoLog = require("../middlewares/usuarioNoLog")
const validator = require("../middlewares/validator")

const userController = require("../controller/userController");

//USUARIOS

//Creación de usuarios
router.get('/register', usuariosLogueados, userController.register);
router.post('/register', upload.single("avatar"), validator , userController.registerPost);


//Login usuarios
router.get('/login',usuariosLogueados, userController.login);
router.post('/', validator, userController.loginPost);

//Perfil Usuarios
router.get('/perfilUsuario', usuarioNoLog, userController.perfilUsuario);

//Cerrar session Usuarios
router.get('/cerrarSession', userController.cerrarSession);


module.exports=router;