function watch(){
    function getTimeFromSecond(seconds){
        const data = new Date(seconds * 1000)//multiplica por 1000 para ter o valor em segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'//time zone do br
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function startWatch(){
        timer = setInterval(function(){
            segundos++; 
            relogio.innerHTML = getTimeFromSecond(segundos);      
        }, 1000);
    }
    
    document.addEventListener('click', function(events){
        const elements = events.target;//vai retornar, na variavel elements, qual elemento do documento foi clicado

        if(elements.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startWatch();
        }
    
        if(elements.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if(elements.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0; 
        }
    })
    
}
watch();