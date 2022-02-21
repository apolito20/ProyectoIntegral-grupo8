const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");
const bcryptjs = require("bcryptjs");


const userFilePath = path.join(__dirname,'../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const userController = {
// loguear un usuario
    login:(req,res) => {
        return res.render("login");
   },

   loginPost: (req, res) => {
      /* const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
           return res.render("login", {
               errors: resultValidation.mapped(),
            })
        }*/

        let emailUsuarioRegistrado = req.body.email
        let usuarioRegistradoPreviamente = users.find(element => element.email == emailUsuarioRegistrado)

        if(usuarioRegistradoPreviamente){
            let contrasenaOk = bcryptjs.compareSync(req.body.contrasena, usuarioRegistradoPreviamente.contrasena);
            if(contrasenaOk){
                delete usuarioRegistradoPreviamente.contrasena;
                req.session.usuarioLog = usuarioRegistradoPreviamente;
                if(req.body.recordarUsuario){
                    res.cookie("usuarioEmail", req.body.email, {maxAge: 1000 * 600})
                }
              return res.redirect ("/perfilUsuario")
            }
        }
        return res.render("login", {
            errors: {
                email: { 
                    msg: "las credenciales son inválidas"
                }
            }
        })
    },
 //crear un usuario
    register:(req,res) => {
       return res.render("register");
    },
 
    registerPost:(req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render("register", {
                errors: resultValidation.mapped(),
            })
        }
     
        let infoLlegaFormUsuarios =  JSON.stringify(req.body);
          let nuevoID = users[users.length -1 ].id +1;
          let nuevoUsuario = {
               id:nuevoID,
               ...req.body,
               contrasena : bcryptjs.hashSync(req.body.contrasena, 10),
               avatar: req.file.filename
            }

          users.push(nuevoUsuario)
          let usersJSON = JSON.stringify(users, null, 2) //el null, 2 hace que quede una clave abajo de la otra, y formatea el JSON
          fs.writeFileSync(userFilePath,usersJSON) // Busca la ubicación del archivo JSON, y le pisa la información con la variable productsJSON
          res.redirect("/login")
    },
// obtener todos los usuarios
    perfilUsuario:(req,res) => {
        return res.render("perfilUsuario", {
        user: req.session.usuarioLog
    })
    },

// Cerrar session usuario
//pendiente por validar botton
    cerrarSession: (req,res) => {
        req.session.destroy();
        console.log(req.session);
        return res.redirect("/");
    }

// encontrar usuaruio por email


}
module.exports = userController;