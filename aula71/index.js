//define Properties e define Propertry
//É uma maneira de fazer com que atributos e métodos tenham o máximo de privacidade possível, já que em JavaScript não existe modificadores de acesso como em Java

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true
    })

    Object.defineProperties(this, {
        nome:{
            enumerable: false,
            value: nome,
            writable: false,
            configurable: false
        },

        preco:{
            value: function(){
                console.log('Método privado chamado!');
                return 20 + (10/100);
            },

            enumerable: false,
            configurable: false
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let i in p1){
    console.log(i);
}


delete p1.nome;//Nesse caso eu defini todas as propriedados do atributo nome como false, não podendo ser feita nenhuma alteração no mesmo
console.log(p1.nome);


p1.preco = 25;
console.log(p1.preco());//Método com o mesmo comportamento