function calculaImc(altura, peso){
    const calculo = peso/(altura*altura);
    return calculo;
}

console.log(calculaImc(1.72, 68));