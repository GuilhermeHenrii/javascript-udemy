//Concatenando arrays
//Jeito errado
const array1 = [10, 20, 30];
const array2 = [15, 25, 35];

const array3 = array1 + ',' + array2;
console.log(array3);
console.log(typeof array3);//Veremos que o typeof será uma string, ou seja, ERRADO.


//Vejamos o jeito correto
const array4 = array1.concat(array2,[11, 22, 33], 'guigui', {nome:'pedro'});//Usando o método CONCAT.
console.log(array4);
console.log(typeof array4);


//Usando o spread (...)
const array5 = [...array1, ...array2, ...[10, 'gui'], 'luiz'];
console.log(array5);