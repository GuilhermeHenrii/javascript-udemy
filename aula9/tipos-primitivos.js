// Tipos de dados primitivos
const nome = 'Guilherme'; // String
const num = 10; // Number
let carro; // Undefined
const nulo = null; // Nulo
const boleano = false; // Boolean = true, false (Lógico)

console.log(typeof nome, nome);
console.log(typeof num, num);
console.log(typeof carro, carro);
console.log(typeof nulo, nulo);
console.log(typeof boleano, boleano);

// Valor por referência, esse comportamento não ocorre quando usamos tipos de dados primitivos
let a = [1, 2];
let b = a;
console.log(a, b);
 b.push(3);
console.log(a, b);
console.log(typeof a);

// Usando tipos de dados primitivos:
let c = 2;
let d = c;
console.log(c, d);
c = 10;
console.log(c, d);

