const nome = require('./mod.js'); // ../(pra tras)     ./(pra frente)
nome('guilherme');

//Variáveis internas no modulos
console.log(__filename); //Nome do arquivo atual - Caminho absoluto
console.log(__dirname); // Nome do diretório atual - Caminho absoluto

//Função para manipular caminhos
const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'aula1')); //Retornou o caminho do modulo atual, voltou duas pastas e entrou na pasta aula1