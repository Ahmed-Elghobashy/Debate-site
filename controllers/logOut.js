function logOutController(req, res) {
    res.cookie('jwt', '', { maxAge: 0 });
    res.redirect('/');
}

module.exports = logOutController;