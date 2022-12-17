/* Avaliação de curto circuito */
const num = null || 10 || false || 50 || undefined; //Vai avaliar se dentro dessa expressão terá um valor true e o retornará, visto que, com o operador OR(||) basta que uma(1) expressão seja verdadeira para que toda a expressão retorne verdadeiro(true), sendo assim, evitando ter que avaliar a expressão inteira.
console.log(num);

const num2 = 'oi' && 10 && NaN && '' && 50; //vai avaliar se dentro da expressão vai ter algum valor false e o retornará, visto que, com o operador AND(&&) basta que um valor seja false para que toda a expressão retorne false, sendo assim, evitando ter que avaliar a expressão inteiro.
console.log(num2);