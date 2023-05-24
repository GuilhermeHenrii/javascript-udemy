//Promises - Promessas

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg1, temp1, cb1) {
    setTimeout(() => {
        console.log(msg1);
        if (cb1) cb();
    }, temp1);
};

// Aqui não conseguriamos definir a ordem na qual cada chamada será executada
// Uma solução usada antigamente seria o uso das funções callback:
esperaAi('Frase 1', rand(1, 5), function () {
    esperaAi('Frase 2', rand(1, 5), function () {
        esperaAi('Frase 3', rand(1, 5));
    });
});


// Usando Promises esse comportamento é controlado de maneira mais fácil e intuitiva:
function esperaAiPromisse(msg2, temp2) {
    return new Promise((resolve, reject) => {//new Promise cria uma promisse que recebe dois parametros, que por convensao ficou conhecido com resolve e reject
        // sempre que quiser resolver algo em uma promessa usa o resolve (then ());
        // sempre que eu quiser rejeitar algo em uma promisse eu uso o reject (cath())
        if (typeof msg2 !== 'string') reject(new Error);
        setTimeout(() => {
            resolve(msg2);//parametro unico
        }, temp2);
    });
}

esperaAiPromisse('Primeira conexão', rand(1, 5))
    .then((resp) => {//mesmo parametro do resolve é o do then
        console.log(resp);
        return esperaAiPromisse('Segunda conexão', rand(1, 5));
    })
    .then(resp => {
        console.log(resp);
        return esperaAiPromisse(2222222, rand(1, 5));
    })
    .then(resp => {
        console.log(resp);
    })
    .then(() => {
        console.log();
    })
    .catch(e => {
        console.log('erro:', e);
    });




function esperaAi(msg, temp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, temp);
    });
}

esperaAi('Conexao primeira camada', rand(1, 5))
    .then((msg) => {
        console.log(msg);
        return esperaAi('Conexão segunda camada', rand(1, 5))
            .then((msg) => {
                console.log(msg);
                return esperaAi('Conexão terceira camada', rand(1, 5))
                    .then((msg) => {
                        console.log(msg);
                    })
            })
    });

console.log('oi');
console.log('oi');
console.log('oi');