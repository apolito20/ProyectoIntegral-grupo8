const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer")
const validator = require("../middlewares/validator")

const mainController = require("../controller/mainController");


router.get("/", mainController.index);

router.get('/carrito', mainController.carrito);


//PRODUCTOS

//Listado de todos los productos
router.get('/productos',mainController.productos);

//Creación de productos
router.get('/productos-create',mainController.create);
router.post("/", upload.single("image"), mainController.store);


//// Detalle un producto
router.get("/detalleProducto/:id", mainController.detalleProducto);


//editar producto metodo get y luego put
router.get("/editarProductos/:id", mainController.editarProductos);
router.put("/:id", upload.single("image"), mainController.guardarProducto);

module.exports=router;  