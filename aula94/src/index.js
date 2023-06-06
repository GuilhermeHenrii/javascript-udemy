//Módulos: são os arquivos, sendo que cada arquivo .js, por exemplo, tem seu próprio 'mundo', sendo assim não podemos acessar valores de um arquivo em outro.

//Import e Export: com import e export resolvemos isso. Como o nome já diz, podemos importar e exportar coisas entre arquivos em um módulo

import {nome as nome2, sobrenome, age, soma, Pessoa} from "./modulo1";//aqui estamos importando as constantes nome,sobrenome, idade, além da função soma de um outro arquivo

const nome = 'joao';//aqui daria um erro, pois a variável nome já havia sido declarada, porém, usando o AS podemos importar a variável já alterando seu nome

console.log(nome,nome2, sobrenome, age);
console.log(soma(5, 10));
const p1 = new Pessoa('gui', 'henri');
console.log(p1);

//podemos também importar um módulo inteiro, basta usar o import * from e o nome do módulo... assim todas as variaveis, funçoes, classes etc, que estiverem com o EXPORT serão exportadas. Isto é, podemos definir valores como privados dentro de um módulo, bastando não usar o 'export' em sua sintax.


