exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.sucess = req.flash('sucess');
    res.locals.user = req.session.user;
    next();
};
  
exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) =>{
    if(err){
        return res.render('404')
    }

    next();
};

exports.csrfMiddle = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginReque = (req, res, next) =>{
    if(!req.session.user){
        req.flash('errors', 'Você não está logado =(');
        req.session.save(() => res.redirect('/'));
        return;
    }
    
    
    
    next();
}