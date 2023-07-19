module.exports = (req, res, next) => {
    //Caso queiramos renderizar algo na tela em todas as rotas, podemos usar um middleware global, como é o caso deste.
    //Podendo ser qualquer coisa.
    res.locals.umavariavelLocal = 'Uma variavel local';
    next();
}