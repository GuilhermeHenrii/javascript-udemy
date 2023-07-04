const path = require('path');
const filePath = path.resolve(__dirname, 'teste.json');
const toWrite = require('./modules/escrever');
const toRead = require('./modules/ler');
let globalVariable;

const pessoas = [
    {nome: 'João'},
    {nome: 'Guilherme'},
    {nome: 'Pedro'},
    {nome: 'Ana'}
];

const json = JSON.stringify(pessoas, '', 2);//O método JSON.stringify() converte valores em javascript para uma String JSON. Esses valores podem ser substituidos especificando a função replacer, ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.

toWrite(filePath, json);

(async function write(path) {
    let datas = await toRead(path);
    datas = JSON.parse(datas);
    globalVariable = datas;
    console.log(globalVariable);
    renderDatas(datas);
})(filePath);

async function renderDatas(datas){
    datas.forEach(val => {
        console.log(val);
    });
}

// console.log(globalVariable); Quando você está trabalhando com operações assíncronas, como requisições de rede ou leitura/gravação de arquivos, você precisa lidar com a natureza assíncrona dessas operações.

// Dentro de uma função assíncrona, você pode usar a palavra-chave await para esperar a resolução de uma promessa e obter o valor retornado por ela. Isso permite que você manipule os dados retornados de forma síncrona.

// No entanto, fora de uma função assíncrona, você não pode usar await diretamente e não pode manipular os dados retornados de uma operação assíncrona de forma síncrona. Você precisa estar dentro do contexto de uma função assíncrona para usar await e obter acesso ao valor resolvido da promessa.

// Portanto, se você precisa manipular os dados retornados de uma operação assíncrona, é recomendado que você esteja dentro de uma função assíncrona e utilize await para obter o valor desejado. Dessa forma, você poderá trabalhar com os dados de forma síncrona dentro do escopo dessa função assíncrona.