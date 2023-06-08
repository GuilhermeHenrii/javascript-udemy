//Revisando o básico de arrays 
const nomes = ['joao', 'pedro', 'lucas', 80];
const nomes2 = new Array('pedro', 'jose', 10); //funciona da mesma forma

const novosNomes = nomes; //Valor por referencia, ou seja, caso altere nomes a constante novosNomes tbm será alterada.

const novosNomes2 = [...nomes2]; //Nesse caso será feita uma cópia
novosNomes2.pop();
console.log(novosNomes2);
console.log(nomes2);

const removido = nomes.shift();
console.log(removido);
console.log(nomes);
console.log(nomes.length);
delete nomes[2];
console.log(nomes);

//shift e unshift alteram os indices do array, podendo ser prejudicial ao desempenho do programa
//pop e push são mais utilizados pois não tem esse comportamento
//slice remove tanto do começa quando to fim
//split separa uma string, e retorna em um array, pelo caractere especificado
//join vai unir todos os valores de um array e retornando uma string, com um separador especificado