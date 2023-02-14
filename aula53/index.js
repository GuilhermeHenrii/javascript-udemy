//closures
//habilidade que a variável tem de acessar seu escopo lexico
const nome = 'gui';
function retornaFuncao(){
    //const nome = 'gui';
    return function(){
        const nome = 'guiiiiii';//vai procurar primeiro no seu escopo
                                //depois no escopo da função e depois no global
        return nome;
    };
}

const funcao = retornaFuncao('guigui');//o closure sera 'guigui'
const funcao2 = retornaFuncao('luiz');//o closure sera 'luiz'
console.dir(funcao());
console.dir(funcao2());