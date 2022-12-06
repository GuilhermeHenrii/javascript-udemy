function calculoImc(altura, peso){
    const IMC = peso/(altura*altura);
    console.log(IMC);
    return IMC;
}
let calculo = calculoImc(1.72, 69);

const nome = 'Guilherme Henrique';
const sobrenome = 'Da Silva';
let idade = 20;
let peso = 69;
const alturaEmMetros = 1.72;
let imc = calculo;
let anoAtual = 2022;
const anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmMetros} de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}.`);

const num1 = 10;
const num2 = 20;
const num3 = num2 + num1;
console.log(num3);
