exports.homePage = (req, res) => {
    //Quando configuramos a session no server.js, ativou o recurso .session
    // req.session.user = {nome: 'Guigi', logado:true};
    console.log(req.session.user);

    //Flash messages
    //Vai retornar um array
    // req.flash('info', 'Olá mundo');
    // req.flash('error', 'Error!')
    // req.flash('success', 'Sucessoo');

    console.log(req.flash('error'), req.flash('success'), req.flash('info'))

    res.render('index');//aqui no controlador estou chamando a view
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    console.log(exports);
};