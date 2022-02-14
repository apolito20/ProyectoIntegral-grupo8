const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");


const userFilePath = path.join(__dirname,'../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const userController = {
    login:(req,res) => {
        return res.render("login");
   },
 
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
        return res.render("/");
    },

}

module.exports = userController;