//Objeto Math (matemática)
const num1 = 4.70;

console.log(Math.floor(num1)); //Vai arrendondar o número para baixo
console.log(Math.ceil(num1)); //Vai arredondar o número para cima
console.log(Math.round(num1)); //Vai arredondar o número para o valor mais próximo
console.log(Math.max(1, 2, 3, 15, 99, 0, 15)); //Vai retornar o maior valor da lista
console.log(Math.min(1, 2, 3, 15, 99, 0, 15)); //Vai retornar o menor valor
const aleatorio = Math.round(Math.random() * (100 - 90) + 90); // Número aleatório entre 90 e 100
console.log(aleatorio);