// const masc = document.querySelector('#genM');
// const feme = document.querySelector('#genF');
// const main = document.querySelector(".main");
// const date = new Date().getFullYear();
// const yearOfBirth = document.querySelector('.yearOfB');
// let calcIdade = date - yearOfBirth.value;

// main.addEventListener('click', function(e){
//     const el = e.target;
//     if(el.classList.contains('btn')){
//        if(masc.checked && date - yearOfBirth.value <= 17){
//         alert('homem');
//         alert('criança');
//        }else if(feme.checked){
//         alert('mulher');
//        }else{
//         alert("preencha todos os campos")
//        }
//     }
// });

function creatPerson(){
    return {
        masc: document.querySelector('.genM'),
        fem: document.querySelector('genF'),
        yearOfBirth: document.querySelector('.yearOfB'),

        
        getAge(){
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn')){
                    const date = new Date().getFullYear;
                    const age = this.yearOfBirth - date;
                    alert(this.yearOfBirth);
                }
            })
        },

    }
}

const person = creatPerson();
person.getAge();