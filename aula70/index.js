//Revisando objetos

//Declarando objetos literalmente
const pessoas = 
{
    nome: 'Guilherme',
    sobrenome: 'Henrique',
    idade: 20
};

console.log(pessoas.nome);
console.log(pessoas['sobrenome']);//Com a notação de colchetes podemos colocar uma variável dinamicamente

const chave = 'idade';
console.log(pessoas[chave]);//Com a notação de pontos isso não é possível

delete pessoas.nome;//Usando delete para deletar um atributo
console.log(pessoas);


/********************************************************************************************************/


//Declarando objetos com um construtor
const pessoas2 = new Object();
pessoas2.nome = 'Henrique';
pessoas2.sobrenome = 'lopes';
pessoas2.calcImc = (peso, altura) => {//Aqui temos um método, básicamente é uma função que é executada dentro do objeto
    peso = pessoas2[peso] = peso;
    altura = pessoas2[altura] = altura;
    const imc = peso/(altura*altura);
    return imc;
}
console.log(pessoas2.calcImc(70, 1.70));
for(let i in pessoas2){
    console.log(pessoas2[i]); 
}


/********************************************************************************************************/


//Factory functions / Constructor functions / Classes (Sintax sugar)
//Linguagem baseada em protótipos

//Factory functions
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Guilherme', 'Lopes');
console.log(p1.nomeCompleto);


//Constructor function
function Pessoa(nome, sobrenome, peso, altura) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.calcImc = function(){
        const imc = peso/(altura**2);
        return imc;
    }
}
//O que a palavra NEW faz?
// 1. {cria um objeto vazio}
// 2. Atrela o THIS a quem está chamando a nova função
// 3. Retorna o THIS, que no caso é quem está chamando a função
const p2 = new Pessoa('Guilherme', 'Miranda', 70, 1.70);
console.log(p2, p2.calcImc());

const p3 = {};
p3.nome = 'Guilherme';


/********************************************************************************************************/


//Por que conseguimos alterar o valor de const em alguns casos?
// p4 -> (endereço de memoria) -> valor
// Quando acessamos e alteramos o VALOR da constante não estamos alterando o seu endereço de memoria e sim o valor que o endereço de memoria esta jogando
const p4 = new Pessoa('Henrique', 'Silva');
Object.freeze(p4);//A partir desse momento o objeto foi freezado, ou seja, a partir daqui não podemos alterar nada dentro desse onjeto
p4.nome = 'Lopes';
console.log(p4);