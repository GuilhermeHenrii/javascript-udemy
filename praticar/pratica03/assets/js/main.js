const txt = document.querySelector('.container h1');

document.addEventListener('click', function(e){
    const elements = e.target;

    if(elements.classList.contains('button')){
        const frases = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
        const aleatorio = Math.round(Math.random() * (9 - 0) +  0);
        txt.innerHTML = `${frases[aleatorio]}`;
    }

    
});