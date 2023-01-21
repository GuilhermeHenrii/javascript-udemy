const frutas = ['pera', 'maça', 'uva'];

//For normal é um contador 
for(let i = 0; i < frutas.length; i++){ 
    console.log(frutas[i]);
}


//For in -> le os indices ou chaves do objeto
for(let index in frutas){
    console.log(frutas[index]);
}


//tambem itera normalmente um objeto
const pessoa = {
    nome: 'gui',
    sobrenome: 'henrique',
    idade: 20
};


console.log(pessoa['nome']);//Maneira diferente de acessar o 
                            //valor da chave de um objeto
const chaves = 'nome';
console.log(pessoa[chaves]);//Usando essa sintaxe podemos pegar o valor da chave
                            //do objeto dinamicamente


for (let chave in pessoa){
    console.log(chave, pessoa[chave]);//para pegar a chave e o valor
}

