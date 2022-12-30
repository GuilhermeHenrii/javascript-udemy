//Forma muito mais simples de fazer esse exercício
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);



/*
function zeroAEsquerda(num){
    const zero =  num >= 0 && num < 10 ? `0${num}` : num;
    return zero;
}


function formataData(data){
    let diaSemana = data.getDay();
    let diaMes = zeroAEsquerda(data.getDate());
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let hora = zeroAEsquerda(data.getHours());
    let minuto = zeroAEsquerda(data.getMinutes());
    let segundo = zeroAEsquerda(data.getSeconds());
    //return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

    switch(diaSemana){
        case 0:
            diaSemana = 'domingo';
            break;
        case 1:
            diaSemana = 'segunda-feira';
            break;
        case 2:
            diaSemana = 'terça-feira';
            break;
        case 3:
            diaSemana = 'quarta-feira';
            break;
        case 4:
            diaSemana = 'quinta-feira';
            break;
        case 5:
            diaSemana = 'sexta-feira';
            break;
        case 6:
            diaSemana = 'sábado';
            break;
        default:
            diaSemana = 'dia não encontrado';
            break;
    }

    switch(mes){
        case 0:
            mes = 'janeiro';
            break;
        case 1:
            mes = 'fevereiro';
            break;
        case 2:
            mes = 'março';
            break;
        case 3:
            mes = 'abril';
            break;
        case 4:
            mes = 'maio';
            break;
        case 5:
            mes = 'junho';
            break;
        case 6:
            mes = 'julho';
            break;
        case 7:
            mes = 'agosto';
            break;
        case 8:
            mes = 'setembro';
            break;
        case 9:
            mes = 'outubro';
            break;
        case 10:
            mes = 'novembro';
            break;
        case 11:
            mes = 'dezembro';
            break;
        default:
            mes = 'mês não encontrado';
            break;
    }
    return `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${hora}:${minuto}:${segundo}`;
}

const txtHr = document.querySelector('#txtHr');
const data = new Date();
const dataBr = formataData(data);
txtHr.innerHTML = `${dataBr}`;
*/