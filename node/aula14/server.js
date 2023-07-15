//Conexão com o banco de dados e primeiro model

require('dotenv').config();

const express = require('express');
const app = express();

//Chamando o pacote mongoose
const mongoose = require('mongoose');

// const connectionString = '';
//executando a conexão
//.then para tratar a promessa que é retornada quando declaramos mongoose.connect
//usando o app.emit para emitir um sinal.
mongoose.connect(process.env.connectionstring, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Conectado')
        app.emit('pronto');
    })
    .catch((e) => {
        console.log(e);
    });

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

//usando o app.on para 'capturar' o sinal "pronto" e realizar a conexão entre o servidor e o banco de dados
app.on('pronto', () => {
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})