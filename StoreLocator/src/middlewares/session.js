const verifySession = (req, res, next) => {
    if (req.session.logedin) {
        next();
    }
    else {
        res.redirect('/login');
    }
};

const destroySession = (req, res, next) => {
    req.session.destroy();
    next();
};

export { verifySession, destroySession };