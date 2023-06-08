const nome = 'Guilherme';
const sobrenome = 'Henrique';
const idade = 21;

function soma(x, y){
    return x + y;
}

export {nome, sobrenome, idade as age, soma};//aqui estamos exportando a constante nome. Note que usei o AS para expotar a variável idade passando um 'apelido' age


export function calculaIdade(){
    console.log('função sendo exportada direto, em tempo de criação.')
}

export default function subtrai(x, y){
    return x-y;
    //aqui usamos o default para dizer que essa função é o default desse modulo, ou seja, o padrao. A sintaxe é diferente quando vamos importar esse tipo de valor. Sempre que importarmos sem as {} pegará o valor default.
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sonrenome = sobrenome;
    }
}