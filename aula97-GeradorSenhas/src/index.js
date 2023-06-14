//import { forEach } from 'core-js/core/array';
import './assets/css/style.css';

//criar uma função que gere um numero aleatório
//criar uma função que gere uma letra maiuscula aleatoria
//criar uma função que gere uma letra minuscula aleatoria
//criar uma função que gere simbolos aleatórios
//fazer com que, de acordo com o numero de caracteres informados no import, isso seja correspondido

class PasswordGenerator{
    constructor(){
        this.form = document.querySelector('.form');
        this.amountCaracteres = document.querySelector('.num-caracters');
        this.inputAddNum = document.querySelector('.add-num');

        this.div = document.querySelector('.generated-password');
        this.array = [];
    }

    handleClcik(){
        const btn = document.querySelector('.btn-generator');
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const checkBoxs = document.querySelectorAll('.checkbox');

            checkBoxs.forEach((value, id) => {
                if(value.checked){
                    if(id === 0) this.addNumbers();

                    else if(id === 1){
                        console.log(this.randomCapitalLetters());
                    }else if(id === 2){
                        console.log(this.randomSmallLetters());
                    }else if(id === 3){
                        alert(id);
                    }
                }
            })
        })
    }

    addNumbers(){
        const rand = Math.floor(Math.random() * (10 - 1) + 1)
        this.array.push(rand);
        return console.log(rand);
    }


    randomSmallLetters(){
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const rand = Math.floor(Math.random() * (26 - 1) + 1);
        const randSmallLetter = letters[rand];
        this.array.push(letters[rand]);
        return randSmallLetter;
    }

    randomCapitalLetters(){
        const smalLetters = this.randomSmallLetters();
        const capitalLetters = smalLetters.toUpperCase;
        return capitalLetters;
    }

    showArray(){
        return console.log(this.array);
    }
}

const add = new PasswordGenerator();
add.handleClcik();