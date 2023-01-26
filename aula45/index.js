//try, catch e finally
//try{
    //console.log(a);
//} catch(error){
    //console.log('deu erro');
    //console.log(error);
//} finally{
    //console.log('sempre serei executado');//semore sera executado
//}

/*********************************************************************************/

function retornaHora(data){
    if(data && !(data instanceof Date)){//data é uma instancia do objeto Date?
        throw new TypeError('Esperando instância de Date.')
    }
    
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hours12: false, //hora passa para 24 ou inves de 12
        hour: '2-digit', //2 digitos
        minute: '2-digit',
        second: '2-digit'
    });
}

try{
    const data = new Date('01-05-1980 14:05:50');
    const hora = retornaHora(10);
    console.log(hora);
}catch(error){
    //trata o erro
}finally{
    console.log('tenha um bom dia'); //sempre ira aparecer
}


