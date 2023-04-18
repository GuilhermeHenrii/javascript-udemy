function myFunction (a, b){
    if(a.b || 'z'){
        return true
    }else{
        return false
    }
}

console.log(myFunction({x:'a',y:'b',z:undefined},'z'));