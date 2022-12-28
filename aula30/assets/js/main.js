function formataData(){

}

function getData(){
    const data = new Date(); 
    const dia = data.getDay();
    const mes = data.getMonth();
    let txtDia = '';
    let txtMes = '';

    switch(dia){
        case 0:
            txtDia = 'Domingo';
            break;
        case 1:
            txt = 'Segunda-feira';
            break;
        case 2:
            txtDia = 'Terça-feira';
            break;
        case 3:
            txtDia = 'Quarta-feira';
            break;
        case 4:
            txtDia = 'Quinta-feira';
            break;
        case 5:
            txtDia = 'Sexta-feira';
            break;
        case 6:
            txtDia = 'Sábado';Mes
            break;
        default:
            txtDia = 'Dia não encontrado';
    }

    switch(mes){
        case 0:
            txtMes = 'Janeiro';
            break;
        case 1:
            txtMes = 'Fevereiro';
            break;
        case 2:
            txtMes = 'Março';
            break;
        case 3:
            txtMes = 'Abril';
            break;
        case 4:
            txtMes = 'Maio';
            break;
        case 5:
            txtMes = 'Junho';
            break;
        case 6:
            txtMes = 'Julho';
            break;
        case 7:
            txtMes = 'Agosto';
            break;
        case 8:
            txtMes = 'Setembro';
            break;
        case 9:
            txtMes = 'Outubro';
            break;
        case 10:
            txtMes = 'Novembro';
            break;
        case 11:
            txtMes = 'Dezembro';
            break;
        default:
            txtMes = 'Mês não encontrato';
    }
    return `${txtDia} ${txtMes}`;
}


const txtHr = document.querySelector('#txtHr');
const data = getData();
txtHr.innerHTML = `${data}`;