// Operadores aritmeticos
let num1 = 2 + 2;
let num2 = 2 - 2;
let num3 = 2 * 2;
let num4 = 2 / 2
let num5 = 2 ** 2;
let num6 = 5 % 5;

console.log(num6);

// Incremento e Decremento 
let num7 = 2;
num7++; // A mesma coisa que: num7 = num7 + 1;
console.log(num7++);
console.log(num7); // O incremento foi feito porem só foi exibido na linha seguinte
++num7; // Pode ser tanto pós (Primeiro retorna e valor e depois faz a operação) quanto pré (Primeiro faz a conta e depois retorna o valor)
console.log(num7);
console.log(++num7); // O incremento foi feito antes e a variável já foi exibida com o mesmo


let num8 = 2;
num8--; // A mesma coisa que: num8 = num8 - 1;
--num8; // Pode ser tanto pós quanto pré

console.log(num8);


// Para caso queiramos incrementar mais de 1 (Operadores de atribuição)
let contador = 0;
const passo = 5;

contador += passo; //contador = contador + step;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);

// Pode ser feito com qualquer outro operador aritmético
let contador2 = 1;
const pulo2 = 5;

contador2 *= pulo2;
console.log(contador2);
contador2 *= pulo2;
console.log(contador2);
contador2 *= pulo2;
console.log(contador2);


let contador3 = 100;
const pulo3 = 5;

contador3 /= pulo3;
console.log(contador3);
contador3 /= pulo3;
console.log(contador3);
contador3 /= pulo3;
console.log(contador3);

// NaN - Not a Number
const num10 = 10;
const num11 = "G40";
console.log(num10 * num11);

// Em alguns casos o JS vai tentar solucionar um problema por si só, como nesse caso, fez uma multiplicação de um Number com uma string
const num12 = String(10);
const num13 = Number('20'); // Convertendo de string para Number
console.log(num12 + num13); // Vai contatenar pois num12 virou String e num13 virou Number
console.log(typeof num12, typeof num13);

