//Declatação de função(function hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
}

//first-class objects(Objetos de primeira classe)
//function expression
const souUmDado = function () {
    console.log('Sou um dado');
};
souUmDado();

//Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow-function');
};
funcaoArrow();

//função dentro de um objeto
const obj = {
    falar(){//instancia do objeto
        console.log('Oi objeto');
    }
};
obj.falar();