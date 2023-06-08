             0123456 
let text = "\\texto \"qualquer\""; // Escapando caracteres em uma string

/* Manipulando strings */
console.log(text); 
console.log(text[0]);
console.log(text.indexOf('quer', 4));
console.log(text.length - 1);
console.log(text.lastIndexOf('quer', 16));
console.log(text.slice(1, 6));
console.log(text.slice(-5, -1));
console.log(text.split(' ', 2));
console.log(text.toLowerCase());
console.log(text.toUpperCase());


/*Expresões regulares em strings*/
console.log(text.match(/[a-z]/g));
console.log(text.search(/q/));
console.log(text.replace('e', 'a'));
console.log(text.replace(/e/g, '@'));

/*Formas de concatenar strings*/
console.log(text.concat(', ','qualquer texto',' assim tambem' ,' ', '78 ', 78, ' ', typeof 78));

console.log(text + ', qualquer texto' + ' ' + 'assim tambem' + ' ' + 78 + ' ' + typeof 78);

console.log(`${text}, qualquer texto, assim tambem 78 ${78} ${typeof 78}`)