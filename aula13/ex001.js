let frase = 'O rato roeu a roupa do rei de roma...'
//Manipulando strings
console.log(frase[0]);
console.log(frase.replace('O', 'A')); //sem expressão regular
console.log(frase.split(' ', 3));
console.log(frase.slice(-7, -3));

//indexOf
console.log(frase.indexOf('o', 16));
console.log(frase.lastIndexOf('o', 16));

//length
console.log(frase.length); // Caracteres
console.log(frase.length - 1); // Índices

//Expressões regulares
console.log(frase.match(/[a-z]/g));
console.log(frase.search(/p/)); //parecido com indexOf
console.log(frase.replace('O', 'A')); //sem expressão regular
console.log(frase.replace(/A/, /O/)); //com expressão regular