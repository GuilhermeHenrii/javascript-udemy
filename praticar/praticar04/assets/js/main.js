const section = document.querySelector('.container');
function createInput() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Digite um valor aqui',);
    input.setAttribute('class', 'inputTxt');
    section.appendChild(input);
    //return input;
}

function getInputValue() {
    const input = document.querySelector('.inputTxt');
    return input.value;
}

function createButton() {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'new-btn');
    section.appendChild(btn);
    return btn.innerHTML = 'Descubra o cubo';
}

function createDiv() {
    const div = document.createElement('div');
    section.appendChild(div);
    return div;
}

document.addEventListener('click', function cube(e) {
    const el = e.target;
    if (el.classList.contains('cliked')) {
        createInput();
        createButton();
    }
    if (el.classList.contains('new-btn')){
        const cube = getInputValue() * getInputValue() * getInputValue(); 
        createDiv().innerHTML = `O cubo de ${getInputValue()} é: ${cube}`;
    }
})
