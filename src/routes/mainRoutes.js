const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer")

const mainController = require("../controller/mainController");


router.get("/", mainController.index);

router.get('/carrito', mainController.carrito);

router.get('/login', mainController.login);

router.get('/register',mainController.register);

//// Detalle un producto
router.get("/detalleProducto/:id", mainController.detalleProducto);

//Creación de productos
router.get('/productos-create',mainController.create);
router.post("/productos", upload.single("img"), mainController.store);

router.get('/productos',mainController.productos);


module.exports=router;