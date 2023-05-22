//Código feito pelo professor copiado por mim
class ValidaFormularioTeste {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.events();
    };

    events() {
        document.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        const passwordValid = this.passWordIsValid();
        const validFields = this.validFields();

        if (passwordValid && validFields) {
            alert('formulario enviado');
            this.form.submit();
        };
    };

    passWordIsValid() {
        let valid = true;

        const password = this.form.querySelector('.senha');
        const repeatPassword = this.form.querySelector('.repetir-senha');

        if (password.value !== repeatPassword.value) {
            valid = false;
            alert('oi');
            //Não esta criando o erro na tela!!
            this.criaErro(password, 'Os campos senha e repetir senha devem ser iguais.');
            this.criaErro(repeatPassword, 'Os campos repetir senha e senha devem sr iguais');
        }


        if (password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.criaErro(password, 'Senha deve conter de 6 até 12 caracteres');
        };

        return valid;
        //Parei aqui !!
    };

    validFields() {
        let valid = true;

        for (let textError of this.form.querySelectorAll('.error-text')) {
            textError.remove();
        }

        for (let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validCpf(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validUser(campo)) valid = false;
            }
        }

        return valid;
    };

    validUser(campo) {
        const user = campo.value;
        let valid = true;

        if (user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Usuário deve conter entre 3 e 12 caractere');
            valid = false;
        }

        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário deve conter apenas letras e/ou números');
            valid = false;
        }

        return valid;
    }

    validCpf(campo) {
        const cpf = new ValidaCpf(campo.value);

        if (!cpf.validar()) {
            this.criaErro(campo, 'O CPF é inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);//Permite inserir um alemento adjacente a um elemento existente no Dom.
    };
}

const validate = new ValidaFormularioTeste();