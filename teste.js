const data = new Date();

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const pessoa1 = new Pessoa('Gui', 'Henrique');
console.log(pessoa1);

console.log(data instanceof Pessoa);