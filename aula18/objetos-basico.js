/* Objeto literal básico */
const pessoa = {
    nome:'guilherme',
    sobrenome:'henrique',
    idade: 10
};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

/* Função que cria objeto (factory) */
function criaPessoa(nome, sobrenome,idade){
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };
}
const pessoa1 = criaPessoa('Guilheme', 'Henrique', '20');
const pessoa2 = criaPessoa('Lucas', 'Souza', '25');
const pessoa3 = criaPessoa('Pedro', 'Silva', 29);

console.log(pessoa3.idade);

/* Usando funções dentro de objeto (método)*/
const pessoa4 = {
    nome:'guilherme',
    sobrenome:'henrique',
    idade: 20,

    fala(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade`);
    },

    incrementaIdade(){
       ++this.idade;
    }
};
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
