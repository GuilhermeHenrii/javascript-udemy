//Atribuição via desestruturação com objetos
const pessoa = {
    nome: 'Gui',
    sobrenome: 'henrique',
    //idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

let nome10 = pessoa.nome;//Atribuição normal

const {nome: teste , sobrenome, idade = ''} = pessoa;//Atribuição via desestruturação
const {endereco: {rua, numero}, endereco} = pessoa;
const {nome, ...resto} = pessoa;//...rest
console.log(teste, rua, numero, endereco);
console.log(nome, resto);