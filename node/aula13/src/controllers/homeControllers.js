exports.homePage = (req, res, next) => {
    console.log(`Primeiero midlleware req.session.sobrenome: ${req.session.nome}`);
    res.render('index');//aqui no controlador estou chamando a view
    next();
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    console.log(exports);
};