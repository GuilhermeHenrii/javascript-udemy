// Não podemos declarar uma variável usando palavras reservadas
let palavrasReservadas = 'const, if, else, let, var, etc';

// As variáveis precisam ter nomes significativos
let n = 'João'; // Irá funcionar pórem essa variável não possui significado

//Não podemos iniciar uma variável com um número, nem contar espaços ou traços.

// Utilizar camelCase, primeira maiúscula e o início da outra palavra começa com a primeira letra maiúscula.
let nomeCompletoDoCliente = 'Fulano De Tal'

// Variáveis em JS são Case-Sensitive, ou seja, nomecliente é uma variável diferente de nomeCliente.

/*********************************************************************************************/
let variavel; // Variável declarada mas não inicializada
console.log(variavel); //undefined

variavel = "Uma string qualquer" // Inicializando uma variável
console.log(variavel);
/********************************************************************************************/

let carro = 'Fiesta'
console.log(carro);
carro = 'Palio'
console.log(carro)
//let carro; (Não podemos redeclarar uma variável usando let)

/********************************************************************************************/
let nome = 'João'; // string
let nome2 = 'Guilherme';
let nome3 = 'Valdecir';
let nome4 = 'Lopes';
let nome5 = 'Emily';

console.log(nome, 'nasceu em 1984');
console.log(nome2 + ' nasceu em 2002, ' + nome2 + ' tem 20 anos.');
console.log(nome3 + ' é um idoso, pois seu nome "Valdecir" parece ser de isoso');
console.log('Meu nome é: ' + nome2 + " e meu último nome é: " + nome4 + ", esse nome, \"Guilherme\", não é de velho.");
console.log('Meu nome é: ' + nome2 + "e meu ultimo nome é: " + nome4 + ", eu namoro a " + nome5 + ".");