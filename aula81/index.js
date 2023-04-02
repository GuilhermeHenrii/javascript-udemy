//Getter e Setter
//symbol | outro tipo de dado primitivo
//Um symbol nunca vai ser igual a outro\ gera um id aleatorio
// (=) = setter
// Setter é quando queremos atrubuir um valor a um atributo
// Getter é quando queremos chamar esse valor
class Carro {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }

    get acelerar(){
        if(this.velocidade < 100){
            this.velocidade++;
        }
        return;
    }
    set acelerar(valor){
        if(this.velocidade < 100){
            this.valocidade = this.velocidade + (valor);
        }
        return;
    }

    desacelerar(){
        if(this.velocidade > 0){
            this.velocidade--;
        }
    }
}

let carro1 = new Carro('Corsa');
console.log(carro1.acelerar);