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
    divCalc.appendChild(divBtn);
    divBtn.appendChild(createButton('btn-sum', '+'));
    divBtn.appendChild(createButton('btn-sub', '-'));
    divBtn.appendChild(createButton('btn-mult', '*'));
    divBtn.appendChild(createButton('btn-divi', '÷'));
})