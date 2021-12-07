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

  listadoProducto:(req,res) => {
     res.render("listadoProducto");
},
}

module.exports = mainController;