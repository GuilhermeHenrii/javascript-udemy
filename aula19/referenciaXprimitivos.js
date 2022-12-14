/* Valores primitivos */
let valoresPrimitivos = 'meu nome é guilherme';
console.log(valoresPrimitivos[0]);
valoresPrimitivos[0] = 'P';
console.log(valoresPrimitivos);
let valores2 = valoresPrimitivos;
console.log(valoresPrimitivos, valores2);
valores2 = 'meu nome é henrique';
console.log(valoresPrimitivos, valores2) //Mesmo alterando o valor de uma variavel a outra não é alterada pois foi feita apenas uma cópia


/* Valores por referencia */
let valoresReferencia = [1, 2, 10, 15, 18, 63];
let valoresB = valoresReferencia;//valoresB esta se referenciando ao mesmo local na memória que valoresRferencia
let valoresC = [...valoresReferencia];// (sprath) será feita uma cópia do array valoresReferencia na variável valoresC, assim seus valores serão independente
console.log(valoresReferencia, valoresB);
valoresReferencia.push('novo');
console.log(valoresReferencia, valoresB);// Alterando o valor de uma variavel a outra tbm é alterada pois foi referenciada no mesmo local da memoria