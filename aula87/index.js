//Métodos úteis para Promises
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, temp){
    return new Promise((resolve, reject) => {
        if(temp < 0 || temp > 10000) {
            reject('Bad Value temp');
            return; //Vai parar a função no erro
        };

        setTimeout(() => {
            resolve(msg);                         
        }, temp);
    });
}

//Promisse.all:
const promises = [
    //'Primeira operação',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 9000),
    //'outro valor'
];

// Espera que todas as promises sejam resolvidas (ou a primeira rejeição).
// Retorna um array de promises na ordem que foi passada 
Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
// .then(function(valor){
//     console.log(valor);
// })
.catch(function(erro){
    console.log(erro);
});


//Promise.race():
//Como se fosse um corrida, como o proprio nome diz
//Vai retornar o primeiro valor resolvido, MESMO NÃO SENDO UMA PROMESSA
Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});


//Promise.resolve:
function carregarPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Pagina já carregada');
    }else{
        return esperaAi('Carreguei a pagina', 0);
    }
}

carregarPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e => console.log(e));


//Promise.reject:
function paginaInfectada(){
    const infectada = true;

    if(infectada == true){
        return Promise.reject(('pagina infectada, nao foi possivel abrir'));
    }else{
        return esperaAi('pagina aberta e limpa', 1000);
    }
}

paginaInfectada()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch((erro) => {
    console.log(erro);
})