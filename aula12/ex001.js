let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
const varA2 = varA;

varA = varB;
varB = varC;
varC = varA2;
console.log(varA, varB, varC);