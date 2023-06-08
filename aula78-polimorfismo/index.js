//Polimorfismo de sobrescrita
function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        console.log(`Seu saldo é de: R$${this.saldo},00. Tente sacar um valor igual ou abaixo do seu saldo.`)
        return;
    }
    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
};

Conta.prototype.verSaldo = function() {
    console.log(`Agência/Conta: ${this.agencia/this.conta} | Saldo: R$${this.saldo}`);
};

function ContaCorrente(agencia, conta, saldo, limiteDiario = 100, limiteAcumulado = 0) {
    Conta.call(this, agencia, conta, saldo);//Deve-se passar, na função call, todos os parametros da superclasse.
    this.limiteDiario = limiteDiario;
    this.limiteAcumulado = limiteAcumulado;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {//Método se comportando de forma diferente na classe filha de uma superclasse, caracterizando o polimorfismo
    if(this.saldo < valor){
        console.log(`Seu saldo é de: R$${this.saldo},00. Tente sacar um valor igual ou abaixo do seu saldo.`);
        return;
    }else if(valor > (this.limiteDiario - this.limiteAcumulado)){
        console.log(`Você atingiu o limite diário de saques.`);
        console.log(`Valor em conta: ${this.saldo}`);
        this.limiteAcumulado += valor;
        return;
    }

    this.saldo -= valor;
    this.limiteAcumulado += valor;
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const conta1 = new ContaCorrente(1010, 152569, 250);
conta1.sacar(95);
conta1.sacar(100);
console.log(conta1);

console.log();

const conta2 = new ContaPoupanca(1023, 569873, 500);
conta2.sacar(200);
conta2.depositar(800);
conta2.sacar(2000);
console.log(conta2);