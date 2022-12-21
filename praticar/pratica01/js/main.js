//1 - cancelar o submit
//2 - fazer uma função para as cores
//3 - fazer uma função para o tipo de pessoa
//4 - chamar essas funções na main 
//5 - de acordo com a combinazção exibir uma img na div


const form = document.querySelector('.form');


form.addEventListener('submit', function(event){
    event.preventDefault();

    const cores = document.getElementsByName('cores');
    const corSelecionada = pegaCores(cores);

    const pessoa = document.getElementsByName('pessoa');
    const pessoaSelecionada = pegaPessoa(pessoa);

    const msg = ``;
    setResultado(msg);

    if(corSelecionada === 1 && pessoaSelecionada === 1){
        setResultado('voce seria o flash')
    }else if(corSelecionada === 1 && pessoaSelecionada === 2){
        setResultado('voce seria o batman');
    }else if(corSelecionada === 1 && pessoaSelecionada === 3){
        setResultado('voce seria o superman');
    }

    if(corSelecionada === 2 && pessoaSelecionada === 1){
        setResultado('voce seria o lanterna verde');
    }else if(corSelecionada === 2 && pessoaSelecionada === 2){
        setResultado('voce seria o ben 10');
    }else if(corSelecionada === 2 && pessoaSelecionada === 3){
        setResultado('voce seria o robin');
    }

    if(corSelecionada === 3 && pessoaSelecionada === 1){
        setResultado('voce seria o aquaman');
    }else if(corSelecionada === 3 && pessoaSelecionada === 2){
        setResultado('voce seria o homem de ferro');
    }else if(corSelecionada === 3 && pessoaSelecionada === 3){
        setResultado('voce seria o homem aranha');
    }
});


function pegaCores(cores){
    if(cores[0].checked) return 1;
    if(cores[1].checked) return 2;
    if(cores[2].checked) return 3;
}


function pegaPessoa(pessoa){
    if(pessoa[0].checked){
        return 1;
    }else if(pessoa[1].checked){
        return 2;
    }else if(pessoa[2].checked){
        return 3;
    }
}


function criaP(){
    const p = document.createElement('p');
    return p;
}


function setResultado(msg){
    const resp = document.querySelector('#resposta');
    resp.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resp.appendChild(p);
}


// function criaImg(){
//     const img = document.createElement('img');
//     return img;
// }