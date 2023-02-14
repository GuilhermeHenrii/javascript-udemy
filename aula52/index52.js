//escopo léxico(escopo dos "pais")
const nome = "Luiz";

function falaNome(){//essa função, procura a variavel 'nome' no seu escopo lexico
    console.log(nome);
}

function usaFalaNoe