/* Mais sobre if, else if e else */

/* A partir do momento que, dentro de um bloco if, uma condição seja verdadeira, essa condição será executada e o bloco if será encerrado */

const num = 10;
if(num !== 0){
    console.log('não é zero')
}


if(num < 10){
    console.log('menor que 10');
}else if(num === 10){
    console.log('igual a 10');
}else if(num >= 10){
    console.log('maior ou igual 10');
}

console.log('...resto do código');