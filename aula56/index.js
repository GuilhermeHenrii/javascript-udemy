//Factory functions
function criaPessoa(nome, sobrenome, assunto, p, a){//Função fabrica faz o uso do this, funções que retornam objetos
    return{
        nome,
        sobrenome,
        assunto: assunto,

        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        
        //setter
        set nomeCompleto(valor){
            //console.log(valor);//esse valor é o que foi passado na linha 40
            valor = valor.split(' ');//retorna um array separando pelo ' '
            this.nome = valor.shift();
            console.log(valor);
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando nada'){
            return `${this.nome} esta falando sobre ${this.assunto}`;//O this sempre ira se referir a quem está chamando o que a função está executando, podendo ser 'pessoa1', 'peossa2' etc.
        },

        peso : p,
        altura: a,

        //Getter
        get imc(){//faz com que a função imc vire um atributo e pode ser executado sem "()"
            const calcImc = this.peso/(this.altura*this.altura);
            return calcImc.toFixed(2);
        }
    }
}

const pessoa1 = criaPessoa('Guilherme', 'Henrique', 'JavaScript', 80, 1.70);
const pessoa2 = criaPessoa('Emily', 'Silva', 'CSS', 60, 1.62);//Podemos ver que aqui apenas precisamos informar os parametros e o objeto é criado, caracterizando uma função fábrica

console.log(pessoa1.fala());
console.log(pessoa1.imc);

console.log(pessoa2.fala());
console.log(pessoa2.imc);
console.log(pessoa2.nomeCompleto);

pessoa1.nomeCompleto = 'Jose Da Silva Souza';
console.log(pessoa1.nome);

console.log(pessoa1.imc);
console.log(pessoa2.imc);