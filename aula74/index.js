//Prototypes
//Podemos ver que, sempre que instanciamos um objeto na classe Pessoa, esse objeto criará um novo método, isso em larga escala provacrá problemas, usando muitos recursos desnecessariamente
//Os prototypes ajudam nisso
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Pessoa.prototype.nomeCompleto = () =>{
        return this.nome  + ' ' +  this.sobrenome;
    }
}

const pessoa1 = new Pessoa('guilherme', 'silva');
console.log(pessoa1.nomeCompleto());
const pessoa2 = new Pessoa ('joao', 'pedro');

console.dir(pessoa1);
console.dir(pessoa2);
//Todas as vezes que instanciamos um objeto em uma função construtora, automaticamente o JavaScript linka o prototype da função contrutora no objeto, ou seja, o objeto passa a ter em sua cadeia de protótipos, todo o prototype do seu construtor.
 
//pessoa1.__proto__ é a mesma coisa que Pessoa.prototype

//Cadeia do prototype -> Todos os objetos tem uma referencia interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo.
/********************************************************************************************************/

function Animal(nome, peso, tipo){
    this.nome = nome;
    this.peso = peso;
    this.tipo = tipo;

    this.nascer = () =>{
        console.log('nasceu');
    };
}

const gato = new Animal ('fish', 8, 'mamímefo');
const cachorro = new Animal ('rex', 15, 'mamífero');
const data = new Date();

console.log(gato);
console.log(cachorro);
console.log(data);