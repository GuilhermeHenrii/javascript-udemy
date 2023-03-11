function criaCalc(){
    //escopo lexico da factory function
    return{
        display: document.querySelector('.display'),

        operation: function(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e){
                alert('Conta inválida');
                return;
            }
        },

        deletOne: function(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clearBtn: function(){
            this.display.value = '';
        },

        iniciar: function(){
            this.cliqueBtn();//quem chama o cliqueBtn() é o this e o this é a calculadora que chamou criaCalc();
            this.pressEnter();
        },

        pressEnter: function(){
            this.display.addEventListener('keyup', (e) =>{
                if(e.keyCode === 13){
                    this.operation();
                }
            })
        },

        cliqueBtn(){
            document.addEventListener('click', function(e){
                //dentro da função, o this passa a apontar para document(com as arrow functions esse comportamento não acontece)
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);//usar a palavra this sempre que for chamar uma chave do objeto dentro do mesmo
                }

                if(el.classList.contains('btn-clear')){
                    this.clearBtn();
                }

                if(el.classList.contains('btn-del')){
                    this.deletOne();
                }
                
                if(el.classList.contains('btn-eq')){
                    this.operation();
                }
            }.bind(this));//aqui estou falando para a função usar o this calculadora
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalc();//calculadora é o this pois ela que chama a função criaCalc();
calculadora.iniciar();