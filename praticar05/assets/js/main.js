function getTimeToSeconds(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleDateString('pt-br',{
        hour12: false,
        timeZone: 'GMT'
    });
}

const container = document.querySelector('.container');
const relogio = document.querySelector('.relogio');
let timer;
let seconds = 0;

function startWatch(){
    timer = setInterval(function(){
        seconds++;
        relogio.innerHTML = getTimeToSeconds(seconds);
    }, 1000);
}

container.addEventListener('click', function(events){
    const elements = events.target;
    
    if(elements.classList.contains('iniciar')){
        clearInterval
        startWatch(timer);
    }
})