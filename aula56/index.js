//Factory functions

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${nome} esta falando sobre ${assunto}`;
        }
    }
}

const pessoa1 = criaPessoa('Guilherme', 'Henrique');
console.log(pessoa1.fala())