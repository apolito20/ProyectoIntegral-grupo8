function usuarioNoLog (req,res,next) {
    if (!req.session.usuarioLog){
        return res.redirect("login");
    }
    next();
}

module.exports = usuarioNoLog;