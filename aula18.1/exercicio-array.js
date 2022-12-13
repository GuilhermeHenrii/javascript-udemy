const vetorInteiro = [10, 20, 30, 40];
const vetorString = ['oi', 'ok', 'beleza'];
const vetorDouble = [10.5, 20.5, 30.5];

const resultado = vetorDouble.concat(vetorString, vetorInteiro);
const resultado2 = vetorInteiro + vetorDouble + vetorString;
console.log(resultado);
console.log(typeof resultado);
console.log(resultado2)
console.log(typeof resultado2);
/****************************************************/

const pilha = [1, 2, 3, 4, 5];
const adiciona = [6, 7, 8, 9, 10];

console.log(adiciona.length);
pilha.push(adiciona[0]);
pilha.push(adiciona[1]);
pilha.push(adiciona[2]);
pilha.push(adiciona[3]);
pilha.push(adiciona[4]);

console.log(pilha);