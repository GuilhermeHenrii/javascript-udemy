const HomeModel = require('../models/HomeModel');

//criando um modelo na base de dados
HomeModel.create({
    titulo: 'Um titulo de testes qualquer',
    descricao: 'Uma descricao de destes'
})
    .then((dados) => console.log(dados))
    .catch((e) => console.log(e));


exports.homePage = (req, res, next) => {
    console.log(`Primeiero midlleware req.session.sobrenome: ${req.session.nome}`);
    res.render('index');//aqui no controlador estou chamando a view
    next();
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    console.log(exports);
};