//Factory functions
function criaPessoa(nome, sobrenome, p, a){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} esta falando sobre ${assunto}`;
        },
        peso = p;
        altura: a
        imc(peso, altura){
            const calcImc = peso/(altura*altura);
            return calcImc.toFixed(2);
        }
    }
}

const pessoa1 = criaPessoa('Guilherme', 'Henrique');
const pessoa2 = criaPessoa('Emily', 'Silva');//Podemos ver que aqui apenas precisamos informar os parametros e o objeto é criado, caracterizando uma função construtora

console.log(pessoa1.fala('programação'));
console.log(pessoa1.imc(60, 1.70));