const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
let corDaLetra = estilosBody.color;
corDaLetra = 'white';

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = corDaLetra;
}