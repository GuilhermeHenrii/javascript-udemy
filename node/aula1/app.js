const moduloUm = require('./mod1'); //Importando o arquivo mod1
console.log(moduloUm);

const funcao = moduloUm.falaNome(); //Pega apenas a função falaNome do modulo mod1
console.log(funcao);

const {nome, falaNome} = require('./mod1'); //Pelo fato do exports ser um objeto, podemos fazer uma atribuição via desestruturação
console.log(falaNome, nome);

/******************************************************************************************************************************************************************/

// Importando uma classe
const pessoa = require('./mod1').Pessoa;
const p1 = new pessoa('gui', 'lopes');
console.log(p1);

/******************************************************************************************************************************************************************/

const path = require('path'); //Módulos exportados direto do node e que instalamos via npm não precisam do caminho especificado.

//const axios = require('axios');
// axios('https:/www.otaviomiranda.com.br/files/json/pessoas.json')
// .then(response => {
//     console.log(response.data);
// })
// .catch(error => {
//     console.log(error);
// })