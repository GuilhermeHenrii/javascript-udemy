/* O básico de uma função */
function soma(altura = 1.86, largura = 2.35){
    const resultado = altura + largura;
    return resultado;
}
console.log(soma(1.70, 2.00));
console.log(soma(1.80, 3.00));
console.log(soma(1.90, 1.50));
console.log(soma());


/* O básico de um função anônima */
const raiz = function (n){
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(25));


/* O básico de arrow function */
const aoQuadrado = (x) => {
    return x ** 2;
};
console.log(aoQuadrado(3));


/* Nesse caso podemos simplicar mais ainda  */
const aoQuadradoSimplicado = x => x**2;
console.log(aoQuadradoSimplicado(3));