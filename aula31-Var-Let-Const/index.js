//var tem o escopo de função apenas
//let tem escopo de bloco, qualquer bloco {}
//com o var acontece o 'hoisting', comportamento não desejado nesse caso


function falaOi() {
    var nome = 'gui';

    if(verdade){
        nome = 10;
        console.log(nome);
    }
    console.log(nome);/* nesse caso com var, o escopo do if não fará diferença e o valor de nome sera 
                       * 10 mesmo se chamado dentro da função
                      */
}

//console.log(nome);//var nome n foi definida, pois esta no escopo da função
const verdade = true;//veja que eu criei a const depois da função e usei ela como parametro no if
falaOi();



console.log(nome2);//sera exibido undefined, mesmo a variavel sendo criada após 
                   //o console log, comportamento do hoisting, let corrigi isso

var nome2 = 'lopes';



{
    let nome3 = 'guigui';
    console.log(nome3);
}
//console.log(nome3);