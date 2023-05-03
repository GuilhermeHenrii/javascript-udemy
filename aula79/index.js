function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        fala(){
            console.log(`${this.nome} está falando`);
        },

        comer(){
            console.log(`${this.nome} esta comendo`)
        }
    };
    
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
const pessoa1 = criaPessoa('guilherme', 'henrique');
pessoa1.comer();