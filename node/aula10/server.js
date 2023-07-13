//Routers e Controllers

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extend:true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));//estou criando a view e passando seu caminho
app.set('view engine', 'ejs');//aqui estou setando a view engine

app.use(routes);

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});