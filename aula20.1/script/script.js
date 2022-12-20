function meuEscopo(){
    const form = document.querySelector('.form');
    const resp = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const email = form.querySelector('.email');
        const js = form.querySelector('.js');
        const css = form.querySelector('.css');
        const html = form.querySelector('.html');

        pessoas.push({
            nome:nome.value,
            email:email.value,
        })

        console.log(pessoas);

        resp.innerHTML = `Seu formulário foi enviado ${nome.value}!`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();