//return 
//retorna um valor 
//termina a função

function soma(a, b){
    return a + b;//aqui retorna o que foi explicito após o return
}
console.log(soma(5, 2));
const retorna = soma(5, 2);
console.log(retorna);


function soma2(a, b){
    console.log(a + b);//aqui a função retornar o que ela está executando
}
soma2(5, 2);
const retorna2 = soma2(5, 2);


function criaPessoa(nome, idade){//o js irá assumir que a chave 'idade' irá assumir
                            //o valor que vier no parametro 'idade' por terem o mesmo nome
    return {nome, idade};
}
const pessoa01 = criaPessoa('guilherme', 20);
console.log(pessoa01);//vai retornar um objeto


//closure
//quando uma função interna acessa o escopo de uma função externa
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;//acessando o parametro e retornando-o
    }
    return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

//Mais um exemplo de closure
function criaMultiplicador(multiplicador){
    //escopo pai
    return function(n){
        //escopo filho'
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(10));
console.log(triplica(10));
console.log(quadriplica(10));