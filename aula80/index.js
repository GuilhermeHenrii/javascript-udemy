//Classes em JS
//Jeito mais moderno de definir classes, tem alguns vantagens em relação as funcoes construtoras
class Pessoa {
    constructor(nome, sobrenome){//Construtor é chamado automaticamento quando a palavra new é usada 
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} estou falando`);
    }

    comer(){
        console.log(`${this.nome} estou comendo`);
    }

    beber(){
        console.log(`${this.nome} estou bebendo`);
    }
}

//Iremos observar que todos os métodos acima estará no prototype da classe Pessoa e irá herdar para todas as intancias, sem fazer nenhuma operação no prototype se quer. O JS se encarregará de fazer isso sozinho.
//Apenas uma instancia em memoria será criada
const p1 = new Pessoa('Guilherme', 'Henrique');
const p2 = new Pessoa('Pedro', 'Lucas');
const p3 = new Pessoa('Jose', 'Lopes');
const p4 = new Pessoa('Ronaldo', 'Silva');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

const [...p] = [
    new Pessoa('lucas', 'Henrique'),
    new Pessoa('Pedro', 'Lucas'),
    new Pessoa('Jose'), 
    new Pessoa('Ronaldo', 'Silva'),
];
console.log(p[0]);
/********************************************************************************************************************************************************************************************/


//Paralalelo com uma função construtora
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando`);
}
const p10 = new Pessoa2('Guilherme', 'Henrique');
console.log(p10);