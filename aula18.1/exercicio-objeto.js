const pessoa = {
    nome:'guilherme',
    sobrenome:'henrique',
    idade:10,

    percorreObjeto(){
        for (i in this){
            console.log(this[i]);
        }
    }
}
pessoa.percorreObjeto();