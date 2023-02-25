//Factory functions
function criaPessoa(nome, sobrenome){
    nome,
    sobrenome,
    fala(assunto){
        return `${this.nome} está ${assunto}`;
    }
}

const p1 = criaPessoa('Guilherme', 'Henrique');
console.log(p1.fala('falando sobre js'));