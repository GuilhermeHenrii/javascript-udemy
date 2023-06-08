// DefineProperty -> Getter e Setter
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque',{
        //value: true,
        //writable: true,
        get: function(){//pega o valor que foi passado
            if(typeof estoque !== 'number'){
                throw new TypeError('Erro de tipo de dado no get');
            }

            return estoquePrivado;
        },

        set: function(valor){//setta um valor, para que não seja atribuido novamente, ou setta condições para que o atributo não seja reatribuido para qualquer tipo de valor.
           if(typeof valor !== 'number'){
                throw new TypeError('Erro de tipo de dado no set');
           }
           estoquePrivado = valor;
        },

        configurable: true,
        enumerable: true
    })
}

const tijolo = new Produto('Tijolo', 0.80, 'aaa');

tijolo.estoque = 10;
console.log(tijolo.estoque);
console.log(tijolo);


/******************************************************************************************/
//Getter e Setter usando função fabrica
function criaProduto(nome, preco){
    return{
        nome: nome,
        get preco(){
            return preco;
        },
        set preco(valor){
            if(valor < 50){
                throw new TypeError('Valor incorreto');
            }
            preco = valor;
        }
    }
}

//const serra = criaProduto('serra', 100);
//serra.preco = 30;
//console.log(serra.preco);