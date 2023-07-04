const fs = require('fs').promises;
//const path = require('path');
//const filePath = path.resolve(__dirname, '..', 'teste.json');

// fs.writeFile(filePath, 'frase 1', {flag: 'w\n', encoding: 'utf8'}); //flag 'w' irá apafar tudo np documento, caso ele já existe e irá escrever o que foi passado. Para não ter esse comportamento podemos colocar a flag 'a'. O '\n' irá quebrar linhas

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Guilherme'},
//     {nome: 'Pedro'},
//     {nome: 'Ana'}
// ];

// const json = JSON.stringify(pessoas, '', 2);
// fs.writeFile(filePath, json, {flag: 'w'});

module.exports = function escreve(path, datas){
    fs.writeFile(path, datas, {flag: 'w'});//O método fs.writeFile() é usado para gravar de forma assíncrona os dados especificados em um arquivo. Por padrão, o arquivo será substituído se existir. O parâmetro 'options' pode ser usado para modificar a funcionalidade do método.
}