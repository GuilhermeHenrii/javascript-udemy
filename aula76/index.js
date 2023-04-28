function Produto(preco, nome){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (quantia){
    const desc = this.preco -= quantia;
    return desc;
};

Produto.prototype.aumento = function (quantia){
    const aument = this.preco += quantia;
    return aument;
};


//Camiseta é um especialização de produto, ou seja, ele herda de produto e pode especializar(sobrescrever) métodos e atributos específicos
function Camiseta(preco, nome, cor){
    this.cor = cor;//Propriedade cor que a função Produto não possui 
    Produto.call(this, preco, nome); //Essa linha de codigo simula o comportamento do new quando executado: Cria um objeto vazio, atrela o this ao objeto que está chamando a função e o retorna.
    //Nesse caso a função construtora Camiseta não irá herdar os métodos do função Produto, pois cada função construtora tem seu prototype
}

Camiseta.prototype = Object.create(Produto.prototype);//Nessa linha eu peguei o Camiseta.prototype que nesse caso é um objeto vazio e joguei nele o prototype de Produto, usando o Object.create();
Camiseta.prototype.constructor = Camiseta;//Reatribui o contrutor de Camiseta para o que era antes, visto que, quando eu joquei o prototype de Produto em Camiseta, o construtor de Camiseta ficou sendo o Produto. 
Camiseta.prototype.aumento = (porcentagem) =>{//usando arrow function teremos um erro, pois ela não tem seu próprio this e acaba procurando no escopo global, nesse caso devemos usar uma function normal
    const aumentCamiseta = this.preco + (this.preco * (porcentagem/100));
    return aumentCamiseta;//Aqui eu sobrescrevi no prototype de Camiseta o método aumento, que na função Produto aumentava o valor e agora aumento por porcentagem

    //Lembrando que a engine do JS irá procurar dentro do objeto o método passado, e caso ela não encontre ela irá na próxima corrente do prototype, nesse caso -> regata -> Camiseta.prototype -> Produto.prototype -> Object.prototype
}


function Caneca(preco, nome, material, estoque){
    Produto.call(this, preco, nome);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


this.preco = 100;//Coloquei esse this.preco no escopo global para mostrar o comprotamento da arrow function
const regata = new Camiseta (50, 'regata');
console.log(regata.aumento(200));
const gen = new Produto (100, 'generic')
const canecaFogao = new Caneca (20, 'CanecaBotafogo', 'porcelana', 10);
canecaFogao.estoque = '1000';
console.log(regata);
console.log(gen);
console.log(canecaFogao);