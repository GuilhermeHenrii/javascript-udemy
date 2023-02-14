//escopo léxico(escopo dos "pais")

function falaNome(){
    console.log("Pera");
}
{
    console.log(falaNome);
    const falaNome = "limao!"
}
