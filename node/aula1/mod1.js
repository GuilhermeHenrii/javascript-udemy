//Modulos - commonJS
const nome = 'Guilherme';
const sobrenome = 'Henrique';

const falaNome = () => {
    console.log(nome, sobrenome);
};

falaNome();
console.log(module); //Vai retornar o objeto module, que tem como uma de suas chaves a chave exports que será um objeto vazio.

module.exports.nome = nome; //Adicionando uma chave nome do objeto do exports e colocando seu valor como a constante nome.

module.exports.sobrenome = sobrenome;
exports.falaNome = falaNome; //Podemos escrever apenas assim, sem a palavra module.

this.qualquerCoisa = 'Qualquer coisa';

console.log(module.exports);

/******************************************************************************************************************************************************************/

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

exports.Pessoa = Pessoa;


//Podemos sobrescrever todo o objeto modules
module.exports = {
    nome, sobrenome, Pessoa
};

this.qualquerCoisa = 'qualquer coisa';