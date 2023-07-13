exports.homePage = (req, res) => {
    res.render('index');//aqui no controlador estou chamando a view
};

exports.trataPost = (req, res) => {
    res.send(`O tecnologia enviada foi: ${req.body.tec}`);
    console.log(exports);
};