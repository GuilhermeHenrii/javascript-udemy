//import { forEach } from 'core-js/core/array';
//import './assets/css/style.css';

//criar uma função que gere um numero aleatório
//criar uma função que gere uma letra maiuscula aleatoria
//criar uma função que gere uma letra minuscula aleatoria
//criar uma função que gere simbolos aleatórios
//fazer com que, de acordo com o numero de caracteres informados no import, isso seja correspondido

class PasswordGenerator {
    constructor() {
        this.form = document.querySelector('.form');
        this.amountCaracteres = document.querySelector('.num-caracters');
        this.inputAddNum = document.querySelector('.add-num');
        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.symbols = ['@', '!', '*', '$', '#', '%', '(', ')', '+', '-', '/', ';', ':', '<', '>', '=', '?', '{', '}', '[', ']'];

        this.div = document.querySelector('.generated-password');
        this.array = [];
        this.checkBoxs = document.querySelectorAll('.checkbox');
    }

    handleClcik() {
        const btn = document.querySelector('.btn-generator');
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            return this.generatedPassword(this.amountCaracteres.value, this.checkBoxs[0], this.checkBoxs[1], this.checkBoxs[2], this.checkBoxs[3]);
            this.showPassword();
        })
    }

    rand(max, min) {
        const rand = Math.floor(Math.random() * (max - min) + min);
        return rand;
    }

    addNumbers() {
        const rand = this.rand(10, 1);
        // this.array.push(rand);
        return rand;
    }

    addRandomCapitalLetters() {
        const rand = this.rand(26, 1);
        const randCapitalLetters = this.letters[rand].toUpperCase();
        // this.array.push(randCapitalLetters);
        return randCapitalLetters;
    }

    addRandomSmallLetters() {
        const rand = this.rand(26, 1);
        const randSmallLetter = this.letters[rand].toLowerCase();
        // this.array.push(randSmallLetter);
        return randSmallLetter;
    }


    addRandomSymbols() {
        const rand = this.rand(this.symbols.length, 1);
        const randSymbols = this.symbols[rand];
        //this.array.push(randSymbols);
        return randSymbols;
    }


    generatedPassword(amount, capital, small, numbers, symbols) {
        const checkBoxs = document.querySelectorAll('.checkbox');
        for (let i = 0; i < this.amountCaracteres.value; i++) {
            capital && this.array.push(this.addRandomCapitalLetters());
            small && this.array.push(this.addRandomSmallLetters());
            numbers && this.array.push(this.addNumbers());
            symbols && this.array.push(this.addRandomSymbols());
        }

        return console.log(this.array.join('').slice(0, amount));
    }



    showPassword() {
        return this.generatedPassword();
    }
}

const add = new PasswordGenerator();
add.handleClcik();