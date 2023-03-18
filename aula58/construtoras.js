//Função fabrica, fabrica objetos
//função construtora constrói objetos
//função construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    //por ser uma função construtora o jv entende que
    //o corpo da função é um onjeto

    //atributos e metodos privados
    const idPessoa = 1010;
    const metodoInterno = () => {

    }

    //atributos e metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.fala = () => {
        console.log(`Eu me chamo ${this.nome}`);
    };
}

const p1 = new Pessoa('Guilherme', 'Henrique');//a palavra new cria um objeto vazio
                                               //faz o this apontar para quem está chamando 
                                               //esse objeto, no caso p1 e retorna 
                                               //implicatamente esse objeto para essa       
                                               //variavel(p1) sem precisar usar o return
const p2 = new Pessoa ('Ana', 'Clara');
p2.fala();


//exemplo de função construtora
function Carro(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

const carro1 = new Carro ('Fiat', 'Palio', 2005);
console.log(carro1);