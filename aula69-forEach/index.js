//forEach
//Tbm retorna uma função callback com os parametros(valor, indice e array)
//Só está disponível para arrays
//Podem ser feitas operações, como por exemplo, somar todos os valores de um array, porém não é recomendado, se possível, nesse caso dar preferencia para a função reduce
//Sua função é apenas de iterar sobre o array, assim como um laço for

const a1  = [10, 20, 30, 40, 50, 60, 70];
let total = 0;

a1.forEach((valor) =>{
    total += valor;
});

console.log(total);