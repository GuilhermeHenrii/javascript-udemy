//Resolução
function ValidaCpf(cpfInformado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable:true,
        get: function(){
            return cpfInformado.replace(/\D+/g, '');
        }
    });
}

ValidaCpf.prototype.valida = function(){
    if(this.cpfLimpo.length !== 11) return false;
    if(this.cpfLimpo === 'undefined') return false;
    if(this.sequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const criaDigito1 = this.criaDigito(cpfParcial);
    const criaDigito2 = this.criaDigito(cpfParcial + criaDigito1);

    const novoCpf = cpfParcial + criaDigito1 + criaDigito2;
    return novoCpf === this.cpfLimpo;
}

ValidaCpf.prototype.criaDigito = function(cpfparcial){
    const cpfArr = Array.from(cpfparcial);
    let decrementador = cpfArr.length + 1;

    const total = cpfArr.reduce((ac, valor) => {
        ac += Number(valor) * decrementador;
        decrementador--;
        return ac;
    }, 0)

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : digito;
}


ValidaCpf.prototype.sequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf('193.071.297-97');
if(cpf.valida()){
    return console.log(`CPF VÁLIDO`);
}
return console.log(`CPF INVÁLIDO`);