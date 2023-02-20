//IIFE -> Immediately invoked function expression
//Ou função auto invocada
(function(){
    console.log('estou usando uma função auto invocada');
    const nome = 'guilherme';
    console.log(nome);
})();//função está sendo invocada e não está 'pisando' no escopo global

const nome = 'henrique';//não afeta o escopo global
console.log(nome);

/******************************************************************************************/

const meuNome = (function(){
    const nome = 'guilherme henrique';
})();

function mostraNome(){
    console.log(meuNome + ' ' + 'esse é meu nome');
}
mostraNome();//'meuNome' retornará undefined

/******************************************************************************************/

(function(idade, peso, altura){
    const bestPlayer = 'neymar';
    //Note que aqui temos um escopo léxico próprio para a função getPlayers
    //Basicamente não precisaremos acessar o escopo global para nada
    function getPlayers(){
        console.log('o melhor jogador é:' + ' ' + bestPlayer);
    }
    getPlayers();
    console.log(idade, peso, altura);

})(20, 68, 1.70);
  