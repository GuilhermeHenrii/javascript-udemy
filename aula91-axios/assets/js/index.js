//Usando feth api
//Para pegar dados de um arquivo json

// fetch ('pessoas.json') 
// .then(response => response.json())
// .then(json => loadElementsOfPage(json)); //aqui usa o feth

//Usando axios
axios.get('pessoas.json')
.then(resp => loadElementsOfPage(resp.data)); //Aqui usa xmlhttprequest

const table = document.createElement('table');

function loadElementsOfPage(json){
    for(let pessoa of json){
        const tr = document.createElement('tr');
        let td = document.createElement('td');

        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resp = document.querySelector('.resultado');
    resp.appendChild(table);
}