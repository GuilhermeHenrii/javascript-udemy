//Splice
//Com o método splice podemos simular os métododos:
//pop e push, shift e unshift

const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Júlia'];
// M E T O D O   S P L I C E(índice, remover(1 ou mais) ou add(0), valor(caso queira add))
const nomesRemovidos = nomes.splice(-2, 2);
nomes.splice(3, 0, 'Guilherme', 'Ana');

console.log(nomes, nomesRemovidos);
