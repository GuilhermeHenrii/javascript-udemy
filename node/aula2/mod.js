module.exports = function(nome){
    return console.log(`Meu nome é:  ${nome}`);
};

module.exports = function(sobrenome){
    return console.log(`Meu sobrenome é: ${sobrenome}`); //Essa função irá subescrever a outra quando importada
};