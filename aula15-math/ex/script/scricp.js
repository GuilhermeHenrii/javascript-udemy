const numero = Number(prompt('Digite um número'));
const titulo = window.document.getElementById('num-titulo');
const resultados = document.getElementById('resultados');

let raizQ = numero ** 0.5;
let numInt = Number.isInteger(numero);
let numNaN = Number.isNaN(numero);
let arredondaBaixo = Math.floor(numero);
let arredondaAlto = Math.ceil(numero);
let casaDecimais = numero.toFixed(2);

titulo.innerHTML = numero;
resultados.innerHTML = '';
resultados.innerHTML += `<p>Raiz quadrada: ${raizQ}</p>`;
resultados.innerHTML += `<p>É um número inteiro? ${numInt} <p/>`;
resultados.innerHTML += `<p>É NaN? ${numNaN}</p>`
resultados.innerHTML += `<p>Arredondado para baixo ${arredondaBaixo}</p>`
resultados.innerHTML += `<p>Arredondado para cima ${arredondaAlto}</p>`
resultados.innerHTML += `<p>Número com duas casas após a vírgula ${casaDecimais}</p>`