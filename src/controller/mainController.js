const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");


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
    

     productos:(req,res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))// --> Vuelve a cargar la BBDD dentro del método para forzar un refresh de los datos del JSON
		res.render('productos', {productos: products})
     },
     
     create:(req,res) => {
        res.render("productos-create");
     },

     store:(req, res) => {
          let infoLlegaForm =  JSON.stringify(req.body);
          let nuevoID = products[products.length -1 ].id +1;
          let nuevoProducto = {
               id:nuevoID,
               ...req.body,
			image: req.file == undefined ? "default-image.png": req.file.filename
          }

          products.push(nuevoProducto)
          let productsJSON = JSON.stringify(products, null, 2) //el null, 2 hace que quede una clave abajo de la otra, y formatea el JSON
          fs.writeFileSync(productsFilePath,productsJSON) // Busca la ubicación del archivo JSON, y le pisa la información con la variable productsJSON
          res.redirect('/productos')
     },

     editarProductos: (req, res) => {
          let idProducto = req.params.id
          let productoAMostrar = products.find(element => element.id == idProducto)
          res.render('editarProductos',{productosEditados: productoAMostrar});
     },

     guardarProducto:(req, res) => {

		let id = req.params.id
		let modifiedProducts = products.map(element => {
			if (element.id == id) {
				return element = {
					id:id,
					...req.body,
					image: req.file == undefined ? element.image : req.file.filename // usa in if ternario
				}
			}
			return element
		})

		let productsJSON = JSON.stringify(modifiedProducts, null, 2) 
		fs.writeFileSync(productsFilePath,productsJSON) 
		res.redirect('/productos')
     },
}

module.exports = mainController;