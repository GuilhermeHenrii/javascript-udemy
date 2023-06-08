/* Operadores lógicos 
&& -> AND -> E -> Todas true para retornar true
|| -> OR -> OU -> Apenas um true para retornar true
! -> NOT -> NÃO -> Negação, sempre o contrário do que era entes do uso
 */

const expressaoAnd = true && true && true && false;
console.log(expressaoAnd);
const expressaoOr = false || true || false || true;
console.log(expressaoOr);
const expressaoNot = !false;
console.log(expressaoNot);