//Exercicio
//Criei um array com 30 valores aleatorios
//Percorri o array vendo se o número é primo ou não
//Caso fosse somei ao acumulador
//No final retornei o valor do array e o acumulador, ou seja a soma dos valores primos



//Retorne a soma dos valores primos de um array de 30 valores aleatórios
const min = 1;
const max = 10;
const numbersRandom = () => {
    return Math.floor(Math.random() * (max - min)) + min;
}


const isPrime = (num) => {
    let aux = num;
    while (aux > 2) {
        aux--;
        if (num % aux === 0 && num !== 1 && num !== 2) {
            return false;
        }
    }
    return true;
};


const arr = [];
for(let i = 0; i < 10; i++){
    arr.push(numbersRandom());
}


const sumPrime = arr.reduce(function (acumulador, valor){
    if(isPrime(valor)){
        return acumulador += valor;
    };
    return acumulador;
}, 0)


console.log(arr);
console.log(sumPrime);