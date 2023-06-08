//Filtrando arrays 
//Filter

//Filtrando os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// for(i of numeros){
//     if(i > 10){
//         console.log(i);
//     }
// }

//Usando o filter
//Sempre irá retornar um array com a mesma quantidade de elementos ou menos
//Essa função vai receber valores booleanos, se true vai colocar no array, se false não irá colocar
//O filter irá usar uma função calback inplicitamente, essa função tem os parametros: valor, indice e o array

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
//Na linha de cima irá retornar verdadeiro ou falso
//Caso o nome tenha mais de 5 letras, ire retornar true e o objeto sera adicionado no array
//Caso contratio ele não sera adicionado


const pessoasCom50OuMais = pessoas.filter(function(valor, indice, array){
    return valor.idade > 50 
})

const nomesTerminadosEmA = pessoas.filter(function(valor, indice, array){
    return valor.nome.toLowerCase().endsWith('a');//Função que retorna verdadeiro ou falso, se a strign termina em algum determinado caractere ou não
})

console.log(pessoasComNomeGrande);
console.log(pessoasCom50OuMais);
console.log(nomesTerminadosEmA);