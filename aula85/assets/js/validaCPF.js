class ValidaCpf{
    constructor(cpf){
        Object.defineProperty(this,'cpfLimpo', {
            enumerable: true,
            get:function(){
                return cpf.replace(/\D+/g, '');
            }
        });
    }
    
    validar(){
        if(typeof this.cpfLimpo !== 'string') return false;
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.cpfLimpo === 'undefined') return false;
        if(this.sequencia()) return false;

        const cpfCortado = this.cpfLimpo.slice(0, -2);

        const digitoUm = ValidaCpf.criaDigito(cpfCortado);
        const digitoDois = ValidaCpf.criaDigito(cpfCortado + digitoUm);

        const novoCpf = cpfCortado + digitoUm + digitoDois;

        return novoCpf === this.cpfLimpo;
    }

    static criaDigito(cpfCortado){//Observando que o método criDigito não usa o this, ou seja, não usa nada que vem na instancia da classe, defini o mesmo como estático.
        const cpfArr = cpfCortado.split('');
        let decrementador = cpfArr.length + 1;
        const total = cpfArr.reduce((ac, valor) => {
            ac += decrementador * Number(valor);
            decrementador--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : digito;
    }

    sequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        console.log(sequencia);
        return sequencia === this.cpfLimpo;
    }

}