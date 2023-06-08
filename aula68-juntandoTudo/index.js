//Como unir as funções reduce, filter e map
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numPares = numeros
.filter((valor) => valor % 2 === 0)//array filtrado apenas para valores pares
.map((valor) => valor * 2)//multiplicando esses números
.reduce((acumulador, valor) =>  acumulador += valor);//somando todos os valores

console.log(numPares);