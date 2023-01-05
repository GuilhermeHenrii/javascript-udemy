//Atribuição por desestruturação com arrays
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras
console.log(letras)


//Facilita quando queremos 'pegar' algo de um array e jogar em uma variável
const numeros = [10, 20, 30, 40, 50, 60];
const [primeiroNum, segundoNum, terceiroNum, ...resto] = numeros;
console.log(primeiroNum, segundoNum, terceiroNum);
console.log(resto);//Vai retornar o resto do array, operador rest(...)
console.log(primeiroNum);


//Podemos pular valores
const numeros2 = [100, 200, 300, 400, 500, 600];
const [um, , tres, , cinco] = numeros2;
console.log(um, tres, cinco);


//Arrays aninhados via desestruturação
const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros3;
console.log(seis);
const [lista1, lista2, lista3] = numeros3;
console.log(lista2[1]);