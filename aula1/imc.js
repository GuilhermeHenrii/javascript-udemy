function calcularImc(peso, altura){
    const IMC = peso/(altura*altura);
    return IMC
}
let resultado = calcularImc(69, 1.72);
console.log(resultado);