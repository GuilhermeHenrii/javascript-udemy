//Funções recursivas
//Executa o codigo e se chama
function recursiva(max) {
    if(max >= 20) return;
        max++;
        console.log(max);
        recursiva(max);
}

recursiva(0);