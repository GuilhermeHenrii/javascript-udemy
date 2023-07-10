const express = require('express');
const app = express();

app.use(express.urlencoded({ extend:true })); //Para tratar o body da requisição

//req.params, req.query, req.body

//Parametros de URL

                     //rota    /parametro da url(url parans)
//http://facebook.com/profiles/id -> rota

                          //quey string
//http://site.com/profiles/id?campanha=googleAds&veraoOferta=desconto


app.get('/', (req, res) =>{
    res.send(`
    <form action = "/" method = "POST">
    Name: <input type = "text" name = "tec">
    <button>Enviar</button>
    </form>
    `)
});

app.get('/testes/:idUsuarios?/:outroParametro?', (req, res) => {
    console.log(req.params); //req.params vai pegar o parametro que foi passado na requisição e vai jogar esse valor como sendo valor da chave idUsuarios. O ponto de interrogação diz que o idUsuarios pode ser opcional. Sendo assim consigo acessar o /testes.
    //res.send(req.params.idUsuarios);//aqui exibira o "id do usuario"

    console.log(req.query); //http://localhost:3000/testes/?nome=gui&sobrenome=lopes
    res.send(req.query.sobrenome); //query na url(consulta);
});

app.post('/', (req, res) => {
    console.log(req.body); //req.body é o que vem no corpo da requisição. Usado no post e put
    res.send(`Voce enviou ${req.body.tec}`); //Aqui usamos o name do formulario
});

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});