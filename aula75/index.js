//Manipulando prototypes
const sequencia = [1, 2, 3, 4, 5, 6, 7, 8];// -> array.prototype -> object.prototype
const sequencia2 = new Array(10, 20, 30);
sequencia2.concat();//Aqui eu acesse o array.prototype e usei o método herdado por essa corrente

console.log(sequencia, sequencia2);

/*****************************************************************************************/

const objetoA = {//objetoA.__proto__ === object.prototype
    chaveA: 'A',
    contar: function(){
        return console.log('1, 2, 3...');
    }
};

const objetoB = {//objetoA -> object.prototype
    chaveB: 'B'
};

//Não usar nem mexer no __proto__ de um objeto, o recomendavel é usar as funções abaixo para pegar/settar o prototype de um determinado objeto
Object.getPrototypeOf(objetoA);//getter
Object.setPrototypeOf(objetoB, objetoA);//setter
objetoB.contar();


/*****************************************************************************************/


function Animal(nome, especie){
    this.nome = nome;
    this.especia = especie;
};

Animal.prototype.som = function (){
    return `som do ${this.nome}`
};

const gato = new Animal('gatao', 'gato');
console.log(gato.som());


const humano = {
    nome: 'gui',
    especie: 'humano'
};

Object.setPrototypeOf(humano, Animal.prototype);

console.log(humano.som());


/******************************************************************************************/
//Aqui estamos criando um objeto e já indicando o seu construtor, nesse caso criei um objeto cachorro e atribui o Animal.prototype como seu construtor. Deve-se atentar que nessa situação o objeto é criado vazio, visto que nenhuma propriedade foi passada a ele.

const cachorro = Object.create(Animal.prototype, {//Aqui nessas chaves eu posso criar um atributo e configura-lo.
    tamanho: {
        configurable: true,
        value: 'medio',
        writable: true,
        enumerable: true,
    },
    nome: {
        configurable: true,
        value: 'xorrin',
        writable: true,
        enumerable: true,
    }

});
console.log(cachorro.som());