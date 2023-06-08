//Herança com classes em JavaScript
//Tomar cuidado com a quantidade de herança em um código !!!
class ReinoAnimal {
    constructor(nome, reproducao) {
        this.nome = nome;
        this.reproducao = reproducao;
        this.vivo = true;
    }

    andar() {
        console.log(`${this.nome} está andando`);
    }
}

class Cachorro extends ReinoAnimal { }//Classe cachorro herdando tudo da classe ReinoAnimal

class Lobo extends ReinoAnimal {
    constructor(nome, reproducao, cor) {
        super(nome, reproducao);//super é usado para chamar o construtor da classe pai

        //Ao estender uma classe em JavaScript, a classe filha precisa ter seu próprio construtor, mesmo que os parâmetros sejam os mesmos que os do construtor da classe pai. Isso ocorre porque a classe filha pode adicionar ou modificar membros e comportamentos específicos dela.
        //Portanto, sempre que uma classe filha estender uma classe pai em JavaScript, ela precisará definir seu próprio construtor, mesmo que ele seja idêntico ao da classe pai, e chamar super() para invocar o construtor da classe pai com os parâmetros adequados. Isso garante que a herança seja estabelecida corretamente e os membros da classe pai sejam inicializados adequadamente na classe filha.
        this.cor = cor;
    }
}

class Jabuticabeira extends ReinoAnimal{
    constructor(nome, cor, tipo){
        super(nome)
        this.cor = cor;
        this.tipo = tipo;
    }

    andar(){
        console.log('arvores não andam');//Método andar de ReinoAnimal foi sobrescrevido na classe Jabuticabeira / Polimorfismo de sobrescrita
    }

    falaOi(){
        console.log('oi');//Método criado e disponível apenas na classe Jabuticabeira
    }
}

const planta = new ReinoAnimal('flor', 'assexuada');
const fumaca = new Cachorro('fumaça', 'sexuada');
const fox = new Lobo('max', 'sexuado', 'cinza');
const peDeArvore = new Jabuticabeira('arnaldo', 'cor de arvore', 'grande');
console.log(peDeArvore);
console.log(peDeArvore.andar());