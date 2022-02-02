const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname,'../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index:(req,res) => {
         res.render("index");
    },

    detalleProducto:(req,res) => {
          let idProducto = req.params.id
          let productoAMostrar = products.find(element => element.id == idProducto)
          res.render('detalleProducto',{productos: productoAMostrar});
   },

   carrito:(req,res) => {
    res.render("carri");
    },
    
    login:(req,res) => {
        res.render("login");
   },

   register:(req,res) => {
       res.render("register");
     },

     productos:(req,res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))// --> Vuelve a cargar la BBDD dentro del método para forzar un refresh de los datos del JSON
		res.render('productos', {productos: products})
     },
     
     create:(req,res) => {
        res.render("productos-create");
     },

     store:(req, res) => {
          return res.send(req.body);
     },

     editarProductos: (req, res) => {
          let idProducto = req.params.id
          let productoAMostrar = products.find(element => element.id == idProducto)
          res.render('editarProductos',{productos: productoAMostrar});
     },

     guardarProducto:(req, res) => {
          res.send("recibí los datos");
     },
}

module.exports = mainController;