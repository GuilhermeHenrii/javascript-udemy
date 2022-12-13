/*Valores primitivos são imutaveis*/
/*Usar const com valores primitivos faz com que os valores e a variavel nunca poderão ser reatribuidos ou alterados*/ 
const nome = 'guilherme';
nome = 'guilherme henrique'; //gerará um erro
console.log(nome);

/***********************************************************************************/
//Ao usar const com valores mútaveis(arrays e objetos), a variavel se manterá constante porém seus valores poderão ser alterados/manipulados
const nome2 = ['guilherme', 10, 'henrique'];
nome2[0] = 'lopes' ;
console.log(nome2); //Note que eu alterei o valor e não a variável constante
