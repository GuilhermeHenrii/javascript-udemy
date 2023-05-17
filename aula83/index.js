//Método de instancia e Estático
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instancia (referente a instancia)
    aumentarVolume(){
        this.volume += 2;        
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    //Método estático (Referente a classe. Não tem acesso ao contrutor pois não instancia nenhum objeto.)
    //Método estatico não tem acesso aod dados da instancia
    static trocaPilha(){
        console.log('Pilha trocada...');
    }
}

const controleUm = new ControleRemoto('Samsung');

controleUm.aumentarVolume();
controleUm.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controleUm);

console.log(Math.random());//Note que eu chamo a classe Math e executo um método, sem usar o new, ou seja, não estou instanciando um objeto na classe Math e sim usando um método estático.