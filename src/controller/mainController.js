const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname,'../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index:(req,res) => {
         res.render("index");
    },

    detalleProducto:(req,res) => {
        res.render("detalleProducto");
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
		res.render('products', {productos: products})
     },
     
     create:(req,res) => {
        res.render("productos-create");
     },

     store:(req, res) => {
          return res.send(req.body);
     },
}

module.exports = mainController;