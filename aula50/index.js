//arguments variavel especial (NÃO FUNCIONA COM ARROW FUNCTION);
function funcao(a, b, c = 1){//adicionando um valor padrão para o parametro
    a = a || 2;// = curto-circuito, atribuindio um valor caso o parametro seja falsy
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);//argumets irá retornar um objeto contendo tds os argumentos
                                //que foram passados quando tal funcao foi chamada
}
funcao(1, 2, 3, 4, 5, 6, 7);


//atribuição via desestruturação
function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao2({nome:'Guilherme', sobrenome:'Henrique', idade:20});

function funcao3([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao3(['gui', 'lopes', 20]);


//operador rest
const conta = function(operador, acumulador = numeros[0], ...numeros){//vai retornar um array com o resto dos argumentos
    for(let i of numeros){
        if(operador === '+')acumulador += i;
        if(operador === '-')acumulador -= i;
        if(operador === '*')acumulador *= i;
        if(operador === '/')acumulador /= i;
    }
    console.log(acumulador);
};
conta('-', 10, 20, 45);