function usuariosLogueados(req, res, next){
    if(req.session.usuarioLog){
        return res.redirect("perfilUsuario");
    }
    next();
}

module.exports = usuariosLogueados;