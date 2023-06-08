//setInterval e setTimeout
function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
 }

const timer = setInterval(function(){
    console.log(mostraHora());//vai definir um intervalo em que a função será executada
}, 1000);//nesse caso 1000 milesegundos = 1seg


setTimeout(function(){
    clearInterval(timer);//vai definir o tempo em que o setInterval irá durar
}, 8000);//8000 = 8seg


setTimeout(function(){
    console.log('ola mundo!');
}, 10000);