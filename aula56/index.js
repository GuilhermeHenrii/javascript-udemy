//Factory functions

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} esta falando sobre ${assunto}`;
        },
        imc(peso, altura){
            const calcImc = peso/(altura*altura);
            return calcImc.;
        }
    }
}

const pessoa1 = criaPessoa('Guilherme', 'Henrique');
const pessoa2 = criaPessoa('Emily', 'Silva');

console.log(pessoa1.fala('programação'));
console.log(pessoa1.imc(60, 1.70));