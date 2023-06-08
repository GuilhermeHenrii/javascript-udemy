//continue e break
const numeros = [1, 2, 3, 4, 5, 6, 7];

for(num of numeros){

    if(num === 2){
        continue; //usando o continue, nesse caso, o console.log não será executado
                  //e a iteração volta para o começo, pulando o numero 2
    }
    console.log(num);

    if(num === 5){ 
        break; //usando o break, nesse caso, assim que o numero 5
               //foi executado o laço parou de ser executado
               //break é ótimo para economizar processos  
    }
}

