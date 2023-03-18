//refazendo o ultimo exercicio usando funçoes construtoras
function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCLiques();
        this.pressEnter();
    }

    this.pressEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.calc();
            }
        });
    }


    this.capturaCLiques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

            if(el.classList.contains('btn-clear')) this.btnClear();

            if(el.classList.contains('btn-del')) this.btnDel();

            if(el.classList.contains('btn-eq')) this.calc();
        })
    }

    this.calc = () => {
        const calc = eval(this.display.value);

        try{
            if(!calc){
                alert('Conta inválida');
                return;
            }

            this.display.value = calc;
        }catch(e){
            alert('Conta inválida!');
            this.display.value = '';
            return;
        }
    }

    this.btnDel = () => this.display.value = this.display.value.slice(0, -1);

    this.btnClear = () => this.display.value = '';

    this.btnParaDisplay = txtEl => {
        this.display.value += txtEl; 
        this.display.focus();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();