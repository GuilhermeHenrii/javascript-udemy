const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf8');//O método fs.readFile() é um método embutido que é usado para ler o arquivo. Este método lê o arquivo inteiro no buffer