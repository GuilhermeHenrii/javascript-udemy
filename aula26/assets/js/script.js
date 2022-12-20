function calculaImc(){
    const resp = document.querySelector('#resposta');
    const peso = document.querySelector('#ipeso');
    const altura = document.querySelector('#ialtura');
    const imc = peso.value/(altura.value*altura.value);

    if(peso.value.length == 0 || altura.value.length == 0){
        resp.innerHTML = `Preencha todos os campos!`;
    }else if(peso.value > 595 || peso.value < 0){
        resp.innerHTML = `Peso inválido!`;
    }else if(altura.value > 2.38 || altura.value < 0){
        resp.innerHTML = `Altura inválida!`;
    }else if(imc < 18.5){
        resp.innerHTML = `Seu imc: ${imc.toFixed(2)}<br>Abaixo do peso`;
    }else if(imc < 24.9){
        resp.innerHTML = `Seu imc: ${imc.toFixed(2)}<br>Peso normal`;
    }else if(imc < 29.9){
        resp.innerHTML = `Seu imc: ${imc.toFixed(2)}<br>Sobrepeso`;
    }else if(imc < 34.9){
        resp.innerHTML = `Seu imc: ${imc.toFixed(2)}<br>Obesidade grau 1`;
    }else if(imc < 39.9){
        resp.innerHTML = `Seu imc: ${imc.toFixed(2)}<br>Obesidade grau 2`;
    }else if (imc > 39.9){
        resp.innerHTML = `Seu imc: ${imc.toFixed(2)}<br>Obesidade grau 3`;
    }
}
