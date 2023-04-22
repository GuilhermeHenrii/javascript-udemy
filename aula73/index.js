//Outros objetos e funcionalidades com objetos
//Copiando objetos com ... ou assingn
const produto = {nome:'Tijela', preco: 1.8};
const produto2 = {...produto, tamanho:'pequeno'};
const produto3 = Object.assign({}, produto, {material: 'plastico'});
const produto4 = {nome: produto.nome, preco: produto.preco};

produto.cor = 'rosa';

console.log(produto, produto2, produto3, produto4);


//Usando o keys para ver os valores do objeto
const chaves = Object.keys(produto);
console.log(chaves);


//Usando o Object.value
//Retorna apenas os valores
const valores = Object.values(produto);
console.log(valores);


//Usando o Object.entries
//Retorna tanto o valor quanto as chaves
//Permite a iteração no objeto
const osDois = Object.entries(produto);
console.log(osDois);


//Usando Object.freeze
Object.freeze(produto);//Congela o objeto


//Usando o Object.getOwnPropertyDescriptor
//Vai retornar os valores das propriedades do atributo especificado
Object.defineProperty(produto2, 'tamanho', {
    writable: false,
    configurable: false
});
delete produto2.tamanho;
console.log(produto2);

console.log(Object.getOwnPropertyDescriptor(produto2, 'tamanho'));
