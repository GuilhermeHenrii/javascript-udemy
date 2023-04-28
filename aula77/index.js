//Exercício : Validador de CPF;
//193.071.297-97

//1  9 3 0 7 1 2 9 7
//10 9 8 7 6 5 4 3 2 =  211

//11 - (211 % 11) = primeiro digito (9) -- se for maior que 9 é considerado 0

//1  9  3  0  7  1  2  9  7  9
//11 10 9  8  7  6  5  4  3  2 = 

//11 - (268 % 11) = segundo digito (7)
//== 193.071.297.74

//usar expressão regular para deixar apenas os numeros
//let cpf = '193.071.297-97'
//let cpfLimpo = cpf.replace(/\D+/g, '');
//console.log(cpfLimpo);

//deve retornar uma string e depois converter para numero


//converter os numeros do cpf para um array, para fazer o calculo


/*****************************************************************************************/

function Pessoa(nome, cpf) {//funçao construtora que recebe nome e cpf
    this.nome = nome;
    this.cpf = cpf; 
}

Pessoa.prototype.validarCpf = function () {//método adicionado no prototype de Pessoa
    const cpf = this.cpf;//const cpf recebe o valor de this.cpf
    const cpfLimpo = cpf.replace(/\D+/g, '');//retorna o cpf apenas com os numeros
    const cpfCortado = cpfLimpo.slice(0, -2);//retorna o cpf sem os dois ultimos valores
    const cpfCortadoArr = (Array.from(cpfCortado));//retorna o cpf em um array
    const cpfCortadoArrFixoUm = [...cpfCortadoArr];//retorna o mesmo array agora sendo uma cópia
    const cpfCortadoArrFixoDois = [...cpfCortadoArr];//retorna o mesmo array agora sendo uma cópia

    function validaPrimeiroDigito() {
        let cont = 10;
        let digitoUm = 0;
        let somaTudoPrimeiroDigito = 0;
        cpfCortadoArrFixoUm.forEach((valor, indice) => {
            const somaPrimeiroDigito = Number(valor) * cont;
            somaTudoPrimeiroDigito += somaPrimeiroDigito;
            cont--;
            digitoUm = 11 - (somaTudoPrimeiroDigito % 11);
        });
        return digitoUm;
    }


    function validaSegundoDigito() {
        cpfCortadoArrFixoDois.push(validaPrimeiroDigito().toString());
        let cont = 11;
        let digitoDois = 0;
        let somaTudoSegundoDigito = 0;
        cpfCortadoArrFixoDois.forEach((valor, indice) => {
            const somaSegundoDigito = Number(valor) * cont;
            somaTudoSegundoDigito += somaSegundoDigito;
            cont--;
            digitoDois = 11 - (somaTudoSegundoDigito % 11);
        });
        return digitoDois;
        
    }
    
    
    cpfCortadoArr.push(validaPrimeiroDigito().toString(), validaSegundoDigito().toString());
    let cpfVerificado = cpfCortadoArr.join('');

    if(cpfVerificado === cpfLimpo){
        return `Olá ${this.nome}! Seu cpf: ${this.cpf} é um cpf válido! ${typeof cpfVerificado}`
    }
    return `Olá ${this.nome}! Seu cpf: ${this.cpf} é um cpf inválido!`
}


const pessoa1 = new Pessoa('Guilherme', '193.071.297-97');
const pessoa2 = new Pessoa('Ana', '033.442.999-74');
console.log(pessoa1.validarCpf());