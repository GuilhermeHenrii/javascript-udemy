//Getter e Setter
//symbol | outro tipo de dado primitivo
//Um symbol nunca vai ser igual a outro\ gera um id aleatorio / Não usa a palavra new / tem a utilidade de fazer com que a variavel seja unica, mesmo existindo outra com o mesmo nome
// (=) = setter
// Setter é quando queremos atrubuir um valor a um atributo
// Getter é quando queremos chamar esse valor
const _velocidade = Symbol('Velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    };

    set velocidade(valor){
        if(valor >= 100 || valor < 0) return;
        if(typeof valor != 'number') return;
        this[_velocidade] = valor;
    };

    get velocidade(){
        return this[_velocidade];
    };
    
    acelerar(){
        if(this[_velocidade] < 100){
            this[_velocidade++];
        }
        return;
    };

    desacelerar(){
        if(this[_velocidade] > 0){
            this[_velocidade]--;
        }
    }
}

let carro1 = new Carro('Corsa');

for(let i = 0; i <= 100; i++){//Velocidade protegida em 100
    carro1.acelerar;
}

carro1.velocidade = 200;
console.log(carro1);