//Express é um framework com vários utilitarios que facilita a criação de aplicações web 

const express = require('express'); // Importando o express
const app = express();

//ROTEAMENTO:
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

//          Criar   ler   atualizar apagar
//CRUD ->   CREATE, READ, UPDATE,   DELETE
//          POST    GET   PUT       DELETE


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


//Portas se referem a um processo que esta sendo executado no servidor.
app.listen(3000, () =>{ //Criando um escutador na porta 3000 para que, quando algo acontecer nessa porta, executar o codigo abaixo
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});

