//Estrutura de dados map
const mapa = new Map();

mapa.set('Cachorro', 5);
mapa.set(2, 10);
mapa.set('Tatu', 1);
mapa.set('Cavalo', 4);
mapa.set('Coelho', 6);

console.log(mapa.delete('Cachorro'));
console.log(mapa.size);
console.log(mapa.get('Cachorro'));

for (const animal of mapa) {
    console.log(animal)
}

const mapaDois = new Map();
mapaDois['carro1'] = 'corsa';
console.log(mapaDois.get('carro1'));


/******************************************************************************************/
const original = new Map([
    [1, 'um']
])

original.set(2, 'dois');

const clone = new Map(original)

console.log(original.get(2))       // um
console.log(original === clone) // false (Útil para comparações superficiais)


const first = new Map([
    [5, 'one'],
    [4, 'two'],
    [3, 'three'],
])

const second = new Map([
    [1, 'uno'],
    [2, 'dos']
])

// Mescla dois maps. A última chave a se repetir vence.
// O operador spread essenciamente converte um Map para um Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three
console.log(merged);


/******************************************************************************************/
//Estudo de casos usando o objeto Map()
//Nessa situação queremos retornar um ibjeto novasPessoas contando os objetos com um idanetificador no objeto, e na mesma ordem ex: 3 {id:3 nome:'Guilherme'}

const pessoas = [
    { id: 3, nome: 'Guilherme' },
    { id: 2, nome: 'Pedro' },
    { id: 1, nome: 'Ana' }
];

const novasPessoas = {};

for (const pessoa of pessoas) {//Neste caso teremos dois problemas: a chave dos objetos em novasPessoas será do tipo string, ja que em um objeto em js a chave só pode ser uma string ou um symbol e a ordem dos objetos foi alterada, e nesse caso de uso é algo que não queremos
    const { id } = pessoa;
    console.log(pessoa);
    novasPessoas[id] = { ...pessoa };
}
console.log(novasPessoas);


const pessoasDois = [
    { id: 3, nome: 'Guilherme' },
    { id: 2, nome: 'Pedro' },
    { id: 1, nome: 'Ana' },
    { id: 4, nome: 'Emily' },
];

const novasPessoasDois = new Map();

for (const pessoaDois of pessoasDois) {//Note que usando o objeto map todos os problemas foram resolvidos.
    //A ordem de inserção se manteve, o id dos objetos é do tipo number
    const { id } = pessoaDois;
    novasPessoasDois.set(id, { ...pessoaDois });
}
//novasPessoasDois.delete(1);
console.log(novasPessoasDois);

//iterando sobre novasPessoasDois, retorna um array com os dados
//com isso podemos fazer a atribuição via desestruturação, abstraindo uma nova cosntante que seria criada para esse laço, podemos usar métodos como keys(), values(), delete()  etc
for (const /*[index, {id, nome}]*/ pessoaTres of novasPessoasDois.keys()) {
    console.log(pessoaTres);
}