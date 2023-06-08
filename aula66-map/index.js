//Usando a função map
//Única diferença do map para o filter é que o map retorna um novo array com alterações com base no array que foi passado, mas não altera o valor do array original
//Map sempre irá retornar um array de tamanho igual ao original


//Retornando o dobro de cada número do array
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobroNum = numeros.map(valor => {
    return valor * 2;
})

console.log(dobroNum);


//Para cada elemento:
//1 - Retorne apenas uma string com o nome da pessoa
//2 - Remova apenas a chave "nome" do objeto
//3 - Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//1
const nome = pessoas.map(valor => {
    return valor.nome;
});
console.log(nome);

//2
const removeObj = pessoas.map(valor =>{
   //delete valor.nome; //Aqui a função irá alterar o valor do array pessoas, pois tanto arrays quanto objetos são valores que trabalham por referencia, ou seja, não são copiados. Para isso devemos criar um novo objeto para não alterar o array.
   //return valor;
   return { idade: valor.idade};
})
console.log(removeObj);

//3
const addId = pessoas.map((valor, indice) =>{
    const newObj = {...valor};// Aqui podemos ver que o valor do array pessoas não foi alterado
    newObj.id = indice;
    return newObj; 
 })

//console.log(addId);
console.log(pessoas);
