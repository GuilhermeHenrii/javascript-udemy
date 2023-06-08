//tratando e lançando erros (try, catch e throw)
function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('não é um numero');
    }
    return x + y;
}

try{
    console.log(soma('1', 10));
}catch(error){
    console.log(error);
} 





// try{
//     console.log(nomes); //variavel 'nomes' não existe
// }catch(err){
//     console.log('erro tratado');
//     console.log(err);
// }