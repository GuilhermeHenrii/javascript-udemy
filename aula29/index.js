function getDiaSemana(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;//Note que podemos substituir o break por return, pois após um return nada na função é executado.
    case 1:
      diaSemanaTexto = 'Segunda';
      break;
    case 2:
      diaSemanaTexto = 'Terça';
      break;
    case 3:
      diaSemanaTexto = 'Quarta';
      break;
    case 4:
      diaSemanaTexto = 'Quinta';
      break;
    case 5:
      diaSemanaTexto = 'Sexta';
      break;
    case 6:
      diaSemanaTexto = 'Sábado';
      break;
    default:
      diaSemanaTexto = '';
      break;
    }
    return diaSemanaTexto;//substituindo todos os breaks por return, não teria necessidade esse return aqui.
}

const data = new Date('1999-10-27');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemana(diaSemana);
console.log(diaSemana, diaSemanaTexto);