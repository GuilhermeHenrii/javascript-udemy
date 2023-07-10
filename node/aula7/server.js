//Nodemon
//Podemos instalar o pacote nodemon, que tem por finalidade atualizar automaticamente o servidor toda vez que houver alguma alteração no código
//npm install nodemon --save-dev
//Criar o script de inicialização para inicializar o projeto com o nodemon rodando

const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send(`
    <form action = "/" method = "POST">
    Name: <input type = "text" name = "nome">
    <button>Enviar</button>
    </form>
    `)
});

app.post('/', (req, res) => {
    res.send("Obrigado por enviar o formulario");
})


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato');
});



app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});

