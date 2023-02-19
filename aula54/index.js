//função de callback
function rand(min = 1000, max = 3000){
    const rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
}

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();//executando o parametro como sendo uma função
    }, rand());
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, rand());
}

//f1(function(){ //"callback hell"
    //f2(function(){
        //f3(function(){
            //console.log('Olá mundo');
        //});
    //});
//})


f1(f1callback);//parametro de f1 sera executado como uma função

function f1callback(){//função que foi passada como parametro sendo executada
    f2(f2callback);//f2 sendo executado com um parametro que tbm sera executado como uma função
}

function f2callback(){//e assim sucessivamente, até executarmos a ordem que desejamos de execução das fubçoes 
    f3(f3callback);
}

function f3callback(){
    console.log('Olá mundo');
}