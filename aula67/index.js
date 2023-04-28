//Some todos os números (Reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)
//Podemos fazer essas tres funcoes usando apenas o REDUCE
/*****************************************************************************************/

//Reduce é mais usado para reduzir o array
//Com reduce podemos executar o trabalho do filter() e do map, mesmo não sendo recomendado
//Tbm retorna uma função callback
//Possui um parametro a mais: acumulador
//Sempre prestar atenção em setar o acumulador como 0 dependendo da situação
//Pois essa variavel vai pegar o primeiro valor do array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array){
    if(valor % 2 === 0){
        acumulador = acumulador + valor;
    }
    return acumulador;
}, 0)

console.log(total);



//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 44},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const velho = pessoas.reduce(function(acumulador, valor, indice, array){
    if(acumulador.idade > valor.idade){
        console.log(acumulador);
        return acumulador;  
    }else{
        console.log(acumulador);
        return valor;
    }
});

console.log(velho);