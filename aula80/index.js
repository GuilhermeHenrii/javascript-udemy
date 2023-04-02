//Classes em JS
class Pessoa {
    constructor(nome, sobrenome){//construtor
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

const p1 = new Pessoa('Guilherme', 'Henrique');
console.log(p1);


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