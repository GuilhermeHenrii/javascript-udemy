//Estrutura de repetição - for clássico
for (let i = 500; i >= 400; i -= 10){
    console.log(i);
}

for (let cont = 0; cont <= 10; cont++){
    const par = cont % 2 === 0 ? 'par':'impar';
    console.log(cont, par);
}

const nomes = ['gui', 'joao', 'roberto', 'ana', 'julia', 'beatriz', 'clara'];

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}