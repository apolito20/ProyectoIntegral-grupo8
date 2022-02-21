function usuarios (req,res,next){

    res.locals.logueado = false;
    if(req.session.usuarioLog){
        res.locals.logueado = true;
    }
    
    next();
}

module.exports = usuarios;