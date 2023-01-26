//exercício qual numero maior
function numMaior(x, y){
    //if(x > y) return x;
    //return y;

    return x > y ? x : y;//operador ternario
} 
console.log(numMaior(10, 23));

/*******************************************/


const max2 = (x, y) => x > y ? x : y;//arrow function
console.log(max2(100, 36));