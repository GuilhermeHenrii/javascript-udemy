//Factory function + prototype
function criaPessoaUm(nome, sobrenome){
    return {//Nesse caso a funçao criaPessoa está aclopada aos métodos, ou seja, todo objeto que for gerado a partir dessa função terá todas esses metodos em seu escopo, sendo utilizados ou não, gerando assim uma certa perda no processamento
        nome,
        sobrenome,
        falar(){
            console.log(`${this.nome} está falando`);
        },

        comer(){
            console.log(`${this.nome} esta comendo`)
        }
    };
}

const pessoa1 = criaPessoaUm('guilherme', 'henrique');
pessoa1.comer();



/********************************************************************************************************/
function criaCarro(nome, cor){
    const carroPrototype = {
        acelerar(){
            console.log(`${this.nome} está acelerando`);
        },
        freiar(){
            console.log(`${this.nome} está freiando`);
        },
    };
    return Object.create(carroPrototype, {//Para corrigir o problema do código de criaPessoa, usamos o Object.create e passamos o objeto carroPrototype, que possui os métodos acelerar e freiar, isto é, a função criaCarro está retornando um objeto vazio que está recebendo os valores de carroPrototype e automaticamente está jogando isso no prototype de criaCarro.
        nome: {value: nome},
        cor: {value: cor}//Outra vantagem de usar factory function é que, podemos (de maneira mais simples) configurar as chaves, como nesse caso eu configurei o value das propriedades nome e sobrenome como sendo o valor passado nos parametros nome e cor
    });
}

const camaro = criaCarro('camaro', 'amarelo');
console.log(camaro.acelerar());



/********************************************************************************************************/
//Desacoplando mais ainda a factory function
const comer = {//nesse caso, estamos 'compondo' um objeto com vários outros objetos e isso é chamado de composição. Também chamado de mixin, basicamente quando criamos coisas "aleatórias" e jogamos em um objeto, sem ter algum nível de hierarquia ou herança. Nesse caso eu criei objetos com métodos, e joguei todos eles dentro de outro objeto e o associei no prototype de criaAnimal, sem estar herdando de alguma outra função ou algo desse tipo.
    comer(){
        console.log(`${this.nome} esta comendo`);
    }
};

const beber = {
      beber(){
        console.log(`${this.nome} esta bebendo`);
      }  
};

function criaAnimal(nome, tipo){
    const prototypeAnimal = {...comer, ...beber};//aqui usamos o spread operator(...) para fazer uma cópia do método comer no objeto prototypeAnimal e jogamos esse valor no objetc.create(), fazendo com que esse objeto seja o prototype de criaAnimal. Podemos usar o Object.assign também.
    return Object.create(prototypeAnimal,{
        nome: {value: nome},
        tipo: {value: tipo}
    });
}


const cachorro = criaAnimal('fumaca', 'cachorro');
cachorro.comer();



/********************************************************************************************************/
// É possível adicionar métodos ao protótipo de uma factory function. O que acontece é que, diferentemente de uma função construtora, uma factory function retorna um objeto literal, não uma instância de uma classe. Por isso, quando você adiciona um método ao protótipo da factory function, ele não estará disponível nas instâncias criadas por ela, mas sim na própria factory function.
function criaPessoaDois(nome, sobrenome){
    const pessoa = {
        nome,
        sobrenome,
        falar(){
            console.log(`${this.nome} está falando`);
        },
        comer(){
            console.log(`${this.nome} esta comendo`)
        }
    };
    return pessoa;
}

criaPessoaDois.prototype.andar = function(){
    console.log(`${this.nome} está andando`);
}

const pessoa10 = criaPessoaDois('João', 'Silva');
console.log(pessoa10.falar()); // João está falando
//console.log(pessoa10.andar()); // TypeError: pessoa1.andar is not a function
//console.log(criaPessoaDois.andar()); // função definida corretamente

// Note que, ao tentar chamar o método andar() na instância pessoa1, ocorre um erro, já que esse método não está disponível nas instâncias criadas por meio da função criaPessoa. No entanto, se você tentar chamar o método diretamente na factory function criaPessoa, ele estará disponível normalmente.

// Porém, é importante mencionar que adicionar métodos ao protótipo de uma factory function pode não ser uma prática comum, já que geralmente a ideia é criar objetos independentes e não compartilhar métodos ou propriedades através do protótipo.