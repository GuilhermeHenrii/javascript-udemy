const pessoa = {
    nome:'guilherme',
    sobrenome:'henrique',
    idade:10,

    fala(){
        console.log(`meu nome é ${this.nome} minha idade é ${this.idade} meu sobrenome é ${this.sobrenome}`);
    },

    incrementIdade(){
       this.idade++; 
    }
};
pessoa.incrementIdade();
pessoa.fala();
pessoa.incrementIdade();
pessoa.incrementIdade();
pessoa.incrementIdade();
pessoa.incrementIdade();
pessoa.incrementIdade();
pessoa.incrementIdade();
pessoa.fala();
