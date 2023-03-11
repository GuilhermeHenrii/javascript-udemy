const masc = document.querySelector('#genM');
const feme = document.querySelector('#genF');
const main = document.querySelector(".main");
const date = new Date();
const inputDt = document.querySelector('#dateId');
const dtBirth = date.value - inputDt.value;


main.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('btn')){
       if(masc.checked){
        alert('homem');
        alert(dtBirth);
       }else if(feme.checked){
        alert('mulher');
       }else{
        alert("preencha todos os campos")
       }
    }
});
