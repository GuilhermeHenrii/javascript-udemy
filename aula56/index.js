//Factory functions
function criaPessoa(nome, sobrenome, assunto, p, a){//Função fabrica faz o uso do this
    return{
        nome,
        sobrenome,
        assunto,

        //getter
        get nomeCompleto(){
            
        },
        
        //setter
        set nomeCompleto(){

        }

        fala(){
            return `${this.nome} esta falando sobre ${this.assunto}`;
        },
        peso : p,
        altura: a,
        get imc(){
            const calcImc = this.peso/(this.altura*this.altura);
            return calcImc.toFixed(2);
        }
    }
}

const pessoa1 = criaPessoa('Guilherme', 'Henrique', 'JavaScript', 80, 1.70);
const pessoa2 = criaPessoa('Emily', 'Silva','CSS', 60, 1.62);//Podemos ver que aqui apenas precisamos informar os parametros e o objeto é criado, caracterizando uma função fábrica

console.log(pessoa2.fala('Programação'));
console.log(pessoa2.imc);