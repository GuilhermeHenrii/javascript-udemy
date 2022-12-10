let num1 = 100;
let num2 = 200.54833587459654;
 
// Na adição, caso tenhamos uma string, é feita a concatenação dos mesmos
console.log(num1.toString() + num2);
console.log(num1.toString(2));// A função toString() além de converter um number para uma string, também retorna o valor binário de num1
console.log(num2.toFixed(2));// A função toFixed() exibindo o número com apenas duas casas decimais após a vírgula
console.log(Number.isInteger(num1));// Retorna o valores booleanos: true para caso a variável seja um número inteiro ou false para caso a variável não seja um número inteiro
console.log(Number.isNaN(num1 * 'ola'));


// O js 'se vira' e faz as operações, mesmo sendo entre uma string e um número
num1 = num1.toString();
let num3 = num1 * num2;
console.log(num3);
console.log(typeof num3);

let num4 = num1 / num2;
console.log(num4);
console.log(typeof num4);

/*****************************************************************************************/
//Imprecisão dos números flutuantes
let num1Decimal = 0.7;
let num2Decimal = 0.1;

num1Decimal += num2Decimal; //0.8
console.log(num1Decimal); //0.79999999...

num1Decimal += num2Decimal; //0.9
num1Decimal += num2Decimal; //1.0
console.log(num1Decimal); //0.99999...

//Maneira errada de fazer
/*num1Decimal = num1Decimal.toFixed(2); 
console.log(num1Decimal);*/


// Maneira certa de contornar essa imprecisão do JS
num1Decimal = parseFloat(num1Decimal.toFixed(2));// Vai passar o número 1.00 para float
console.log(num1Decimal); // 1
num1Decimal = num1Decimal.toFixed(2);
console.log(num1Decimal);
num1Decimal = Number.isInteger(num1Decimal);
console.log(num1Decimal); // true, ou seja, o JS vai entender que é inteiro


//Após a solução
//num1Decimal += num2Decimal; //1.1
//num1Decimal += num2Decimal; //1.2
//num1Decimal += num2Decimal; //1.3
//num1Decimal += num2Decimal; //1.4
//num1Decimal += num2Decimal; //1.5
//num1Decimal += num2Decimal; //1.6
//num1Decimal += num2Decimal; //1.7
//num1Decimal += num2Decimal; //1.8
//num1Decimal += num2Decimal; //1.9
//num1Decimal += num2Decimal; //2 Aqui o Js entenderá que é um número inteiro
