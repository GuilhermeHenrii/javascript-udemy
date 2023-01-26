let text = document.querySelector('.container h1');

function getHours(){
    const hora = new Date();
    return hora.toLocaleTimeString('pt-BR');
}
const timer = function(){
    
}


text.innerHTML = `${getHours()}`;