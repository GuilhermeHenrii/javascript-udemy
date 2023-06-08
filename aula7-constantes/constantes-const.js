// Todas as regras de variáveis se aplicam em constantes, com uma única diferença que: Não podemos alterar o valor de uma constante e, quando declaramos uma constante, devemos inicializar ela.

// const nome; jeito errado 
const nome = 'Guilherme';
console.log(nome);
const sobrenome = 'Henrique';
const nomeTodo = nome + ' ' + sobrenome;
console.log(nomeTodo);
/*****************************************************************************/

// + - * / (operadores aritméticos)
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const duplica = resultado * 2; 
console.log(duplica);

// Tomar cuidado ao fazer isso, pois o valor inicial de -let triplica-  será perdido.
let triplica = resultado * 3;
triplica = triplica + 10;

const nomeCachorro = 'Fumaça';
console.log(typeof nomeCachorro);

console.log(typeof (nomeCachorro + resultado));

