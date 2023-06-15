const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randCapitalLetter = () => String.fromCharCode(rand(65, 91));
const randSmallLetter = () => String.fromCharCode(rand(97, 123));
const randNumbers = () => String.fromCharCode(rand(48, 58));
const symbol = '!#$%&()*+-@?[/\\]{}';
const randSymbol = () => symbol[rand(0, symbol.length)];


export default function passwordGenerator(amount, numbers, capitall, small, symbols){
    const passwordArray = [];
    amount = Number(amount);

    for(let i = 0; i < amount; i++){
        numbers && passwordArray.push(randNumbers());
        capitall && passwordArray.push(randCapitalLetter());
        small && passwordArray.push(randSmallLetter());
        symbols && passwordArray.push(randSymbol());
    }

    return passwordArray.join('').slice(0, amount);
}