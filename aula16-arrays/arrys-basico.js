const nomes1 = ['joão', 'pedro', 'paula', 'vitoria'];
/*Inserindo e removendo elemtos do arrays com métodos*/
nomes1.push('guigui');//adicionando elemento no final do array
console.log(nomes1);

nomes1.unshift('lopes');//adicionando elemento no começo do array
console.log(nomes1);

nomes1.pop(nomes1);//remove o ultimo elemento do array
console.log(nomes1);

nomes1.shift(nomes1)//remove o primeiro elemento do array
console.log(nomes1);


/*************************************************************************/
//removendo elementos de um array sem alterar seus indices
const nomes3 = ['lucas', 'maria', 'fernanda', 'joana']
delete nomes3[0];
console.log(nomes3);



/*************************************************************************/
/*Manipulando arrays com notação de colchetes*/
const nomes2 = ['joão', 'pedro', 'paula', 'vitoria'];
console.log(nomes2);
console.log(nomes2[3]);
console.log(nomes2.length - 1);
nomes2[nomes2.length] = 'guigui'; //adicionando um elemento ao final do array
console.log(nomes2);
nomes2[0] = 'joana';//alterando o valor do array no indice 0
console.log(nomes2)

/*********************************************************************/
//usando o slice
const nomes4 = ['guigui', 'emily', 'joao','ana', 'maria'];
console.log(nomes4.slice(0, -1));