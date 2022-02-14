const {body} = require("express-validator");

module.exports= [
    body("nombreUsuario").notEmpty().isLength({min:5, max:10}).withMessage("El nombre es requerido"),

    body("apellidoUsuario").notEmpty().isLength({min:5, max:10}).withMessage("El apellido es requerido"),

    body("email").notEmpty().withMessage("El email es requerido").bail()
                         .isEmail().withMessage("Debe ingresar un email válido"),

    body("telefono").notEmpty().withMessage("El teléfono es requerido").bail()
                      .isInt().withMessage("Debe ingresar un número"),

    body("contrasena").notEmpty().isLength({min:5, max:10}).withMessage("La contraseña es requerida"),
                        
    body("category").notEmpty().withMessage("La categoría es requerida"),

    body("avatar").custom((value, {req}) => {
        let file = req.file;
        if (!file){
            throw new Error("Tienes que subir una imagen"); 
        }
        return true;
    })
]
