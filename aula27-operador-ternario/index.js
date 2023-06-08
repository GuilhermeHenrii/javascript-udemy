//Operador ternário
//Fácilita quando se quer usar apenas um if e else
const pontoUsuario = 500;
const resultado = pontoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';
console.log(resultado);

// const usuarioNormal = resultado || 'usuario normal';
// const usuarioVip = resultado && 'usuario vip';

// console.log(usuarioNormal, usuarioVip);

const gasolina = 1.1;
const carroLiga = gasolina > 1 ? 'pode ir' : 'abasteça';
console.log(carroLiga);

// if(pontoUsuario >= 1000){
//     console.log('vip')
// }else{
//     console.log('normal')
// }