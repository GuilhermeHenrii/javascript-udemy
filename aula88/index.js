// Async / Await
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};


function tempRender(msg, temp){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject ('ERROR  PROMISE');
        };
        setTimeout(() => {
            resolve(msg);
        }, temp);
    })
}

//Já sabemos que isso aqui veio para substituir as funções callback(calback-heel)
//tempRender('primeira renderização', 10000)//usando promises para dizer que isso é algo sincrono, ou seja, mesmo essa linha demorando mais tempo para executar, a linha debaixo só vai executar após ela e assim sucessivamente  
//.then((resolvedValue) =>{
    //console.log(resolvedValue);
    //return tempRender('segunda renderização', 8000);//no dia a dia,nao sabemos quanto tempo um requisição ou uma api ira demorar para retornar um dado, note que, mesmo a primeira chamada da função temRender() demorando 10 segundos para executar, a segunda chamada só irá executar após a primeira, mesmo ela tendo um 'tempo de resposta' menor, pois se o código mantesse o comportamento natural do JS que é sincrono, o código executaria sem antes esperar as requisiçoes chegarem.
//})
//.then((resolvedValue) => {
    //console.log(resolvedValue);
    //return tempRender('terceira renderização', 1000);//note que ao final o codigo irar //demorar 19 seundos para executar
//})
//.then((resolvedValue) =>{
    //console.log(resolvedValue);
//})
//.catch((error) =>{
    //console.log(error);
//})


//Usando o asyn/await
//Note que ocódigo fica bem mais limpo e intuitivo
async function executa(){
    try {//englobando todas as promisses para tratar os erros
        const fase1 = tempRender('renderizando 1', 2000);//aqui ira retonar um 'pending', ou seja, a função está pendente pois não usamos o await para esperar ela ser executada para aí sim exibi-la. 
        console.log(fase1);

        setTimeout(() => {
            console.log('estava pendente' + fase1);//setei 2 segundos e meio para logar a função fase1 novamente, ou seja, ela demorou 2 segundos para executar e como esta sem o await não foi possivel esperar, setando esse novo valor conseguimos ver o valor da função
        }, 2500);

        const fase2 = await tempRender('renderizando 3', 5000);//aqui sera executado o catch e nao executaria mais nada
        console.log(fase2);

        const fase3 = await tempRender('renderizando 3', 500);
        console.log(fase3);
    }
    catch(error){
        console.log(error);
    }
}

executa();

// Uma Promise está em um destes estados:
// pending: estado inicial, nem cumprido nem rejeitado.
// fulfilled: significa que a operação foi concluída com sucesso.
// rejected: significa que a operação falhou.