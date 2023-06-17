import generatedPassword from './generators';

const divGeneratedPassword = document.querySelector('.generated-password');
const inputNumCaracter = document.querySelector('.num-caracters');
const inputAddNum = document.querySelector('.add-num');
const inputCapLetters = document.querySelector('.cap-letters');
const inputSmallLetters = document.querySelector('.small-letters');
const inputSymbols = document.querySelector('.symbols');
const inputBtnGenerator = document.querySelector('.btn-generator');


export default () => {
    inputBtnGenerator.addEventListener('submit', (e) => {
        e.preventDefault();
        divGeneratedPassword.innerHTML = generates();
    });
};

function generates(){
    const password = generatedPassword(
        inputNumCaracter.value,
        inputAddNum.checked,
        inputCapLetters.checked,
        inputSmallLetters.checked,
        inputSymbols.checked
    );

    if(password){
        divGeneratedPassword.classList.remove('invalidPassword');
        return password;
    }else{
        divGeneratedPassword.classList.add('invalidPassword');
        return divGeneratedPassword.innerHTML = 'Nada selecionado';
    }
}