    let numTxt = prompt('Digite um número');
    const num = Number(numTxt);
    let raizQ = num ** 0.5;
    let numInt = Number.isInteger(num);
    let numNaN = Number.isNaN(num);
    let arredondaBaixo = Math.floor(num);
    let arredondaAlto = Math.ceil(num);
    let casaDecimais = num.toFixed(2);

    window.document.body.innerHTML = `<h2>O numéro digitado foi ${num}</h2>`;
    document.body.innerHTML += `<br>A Raiz Quadrada desse número é ${raizQ}`;
    document.body.innerHTML += `<br>O número é inteiro? ${numInt}`;
    document.body.innerHTML += `<br>O número é NaN? ${numNaN}`;
    document.body.innerHTML += `<br>O número arrendondado para cima é ${arredondaAlto}`;
    document.body.innerHTML += `<br>O número arredondado para baixo é ${arredondaBaixo}`
    document.body.innerHTML += `<br>O número com duas casas decimais após a virgula é ${casaDecimais}`;

