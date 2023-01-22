 //while e do while (estrutura de repetição)
 //Geralmente usado quando não se sabe quantas vezes será 
 //feita a iteração

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

const min = 1;
const max = 50;
let rand = 10;

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}


console.log('#############################');
//a diferença entre while e do while é que
//o do while executa a ação e depois checa a
//condição, enquamto o while primeiro checa
//a condição e depois executa a ação

do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);