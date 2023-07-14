//MiddleWares

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const middlewareGlobal = require ('./src/middlewares/middleware');

app.use(express.urlencoded({ extend:true }));

app.use(express.static(path.resolve(__dirname, 'public')));//criando o express static e resolvendo seu caminho absoluto.

app.set('views', path.resolve(__dirname, 'src', 'views'));//estou criando a view e passando seu caminho
app.set('view engine', 'ejs');//aqui estou setando a view engine

//middlewares proprios
app.use(middlewareGlobal);//todos as requisições, em todas as rotas e em todos os verbos iram executar este middleware
app.use(routes);

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});