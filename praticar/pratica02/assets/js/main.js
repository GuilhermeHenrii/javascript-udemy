//1 - criar uma div para a calculadora
//2 - criar uma div de resultado 
//3- criar os botoes e suas funcionalidades

function container(tag){
    const container = document.querySelector('.container');
    return container.appendChild(tag);
}

function createDiv(className){
    const div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}
    function createButton(idName, value){
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('id', idName)
    btn.innerHTML = value;
    return btn;
}


document.addEventListener('DOMContentLoaded' , function(){
    const divCalc = container(createDiv('div-calc'));
    const divBtn = createDiv('div-btn');
    const divNum = createDiv('div-num');
    divCalc.appendChild(divBtn);
    divCalc.appendChild(divNum);
    divBtn.appendChild(createButton('btn-sum', '+'));
    divBtn.appendChild(createButton('btn-sub', '-'));
    divBtn.appendChild(createButton('btn-mult', '*'));
    divBtn.appendChild(createButton('btn-divi', '÷'));
    divNum.appendChild(createButton('btn-num1', '1'));
    divNum.appendChild(createButton('btn-num2', '2'));
    divNum.appendChild(createButton('btn-num3', '3'));
    divNum.appendChild(createButton('btn-num4', '4'));
    divNum.appendChild(createButton('btn-num5', '5'));
    divNum.appendChild(createButton('btn-num6', '6'));
    divNum.appendChild(createButton('btn-num7', '7'));
    divNum.appendChild(createButton('btn-num8', '8'));
    divNum.appendChild(createButton('btn-num9', '9'));
})