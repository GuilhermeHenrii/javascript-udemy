const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(1000*60 + tresHoras + umDia - umDia);
console.log(data.toString());//Será exibido a data do marco zero unix mais as operações que eu adicionei.
/*********************************************************************************************************************/

//Formas de chamar o objeto Date
const data2 = new Date(2019, 10, 15, 20, 30, 25, 10000);
console.log(data2.toString());//note que vai retornar o mes de novembro e não o de outubto, pois vai de 0-11, onde 0 é janeiro e 11 é dezembro. Note também que o js corrigiu os 10 mil milessegundos para 10 segundos e os adicionou no resultado. Por fim, podemos omitir qualquer valor, o mesmo terá resultado 0, não podemos omitir apenas o ano e o mes.


//Outro jeito de chamar o Objeto Date
const data3 = new Date('2010/12/20 20:55:59.200');//Nesse caso a contagem de mes não é feita de 0-11 e sim 1-12, note como a sintaxe é mais facilitada

console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth());//Mes sera 11 pois a contagem é feita 0-11
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minuto', data3.getMinutes());
console.log('Segundo', data3.getSeconds());
console.log('Milessegundo', data3.getMilliseconds());
console.log('Dia semana', data3.getDay());//0 - domingo e 6 - sabado
console.log(data3.toString());
console.log(Date.now());//retorna os milissegundos do marco 0 até a data atual


//Função para formatar uma data
function zeroAEsquerda(num) {
    return num >= 10 ? num:`0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);