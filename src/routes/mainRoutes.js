const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer")

const mainController = require("../controller/mainController");


router.get("/", mainController.index);

router.get('/carrito', mainController.carrito);

router.get('/login', mainController.login);

router.get('/register',mainController.register);

//Listado de todos los productos
router.get('/productos',mainController.productos);

//Creación de productos
router.get('/productos-create',mainController.create);
router.post("/productos", upload.single("img"), mainController.store);


//// Detalle un producto
router.get("/detalleProducto/:id", mainController.detalleProducto);


//editar producto metodo get y luego put
router.get("/editarProductos/:id", mainController.editarProductos);
router.put("/productos", mainController.guardarProducto);

module.exports=router;