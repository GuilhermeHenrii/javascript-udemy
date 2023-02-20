//1 - criar uma div para a calculadora
//2 - criar uma div de resultado 
//3- criar os botoes e suas funcionalidad

(function(){
    // const add = document.querySelector('.add');
    // const sub = document.querySelector('.sub');
    // const div = document.querySelector('.div');
    // const mult = document.querySelector('.mult');
    // const result = document.querySelector('.result');
    // const resp = document.querySelector('.resp');

    document.addEventListener('click', function(e){
        const elements = e.target;
        if(elements.classList.contains('add')){
            const add = function(x, y){
                const sum = x + y;
                return sum;
            }
        }
        if(elements.classList.contains('sub')){
            alert('subtracao');
        }
        if(elements.classList.contains('div')){
            alert('div');
        }
        if(elements.classList.contains('mult')){
            alert('mult');
        }
        if(elements.classList.contains('result')){
            alert('o resultado é:');
        }
    })

})();