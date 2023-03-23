//Funçoes geradoras
function* geradora1(){
    yield 'valor 1'; 
    yield 'valor 2';
    yield 'valor 3';
}
const g1 = geradora1();
console.log(g1.next());//metodo next retorna um objeto com um value e o booleano done
console.log(g1.next().value);//vai retornar o valor
console.log(g1.next());
console.log(g1.next());//vai retornar o value undefined e done true true, pois acabou os valores



//usando for
const g2 = geradora1();
for(let valor of g2){
    console.log(valor);//vai retornar o valor do atributo value do objeto
}



//gerador infinito
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}
const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);



//Gerador que delega tarefa a outro
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();//delegando para a func geradora 3 executar 
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
for(let i of g4){
    console.log(i);
}


//Usando functions
function* geradora5(){
    yield function(){
        console.log('funcao um');
    }
    
    return function(){
        console.log('vim do return');//O return vai retornar e finalizar a func
    }
    
    yield function(){
        console.log('funcao dois');//Esse código n será lido
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();