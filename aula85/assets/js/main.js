class ValidRegistrationForm {
    constructor(name, surname, cpf, user, password, repetPassword) {
        this.name = name;
        this.surname = surname;
        this.cpf = cpf;
        this.user = user;
        this.password = password;
        this.repetPassword = repetPassword;
    }

    inputIsEmpty() {
        //Ve se os inputs estao vazios / Tratar essa validação
        if (this.name === '') return alert('Campo do nome vazio');
        if (this.surname === '') return alert('Campo do sobrenome vazio');
        if (this.cpf === '') return alert('Campo do cpf vazio');
        if (this.user === '') return alert('Campo do usuário vazio');
        if (this.password === '') return alert('Campo da senha vazio');
        if (this.repetPassword === '') return alert('Campo de repetir senha vazio');
    }

    validateUser() {
        //Valida o nome do usuario
        if (this.user.length < 3 || this.user.length > 12) return alert('usuario deve conter entre 3 e 12 caracteres');

        const validatUser = /^[a-zA-Z0-9]+$/.test(this.user);
        if(!validatUser) return alert('usuario invalido');
        
        return alert('usuario valido');
    }

    validatePassword() {
        //Valida a senha
        //Erro no .length !!
        if (!this.password || !this.repetPassword) return alert('senha nap definida');
        if (this.password.length < 6 || this.password.length > 12) return 'senha deve ter de 6 a 12 digitos';
        if (this.repetPassword.length < 3 || this.repetPassword.length > 12) return alert('repetir senha deve conter de 3 a 12 caraceteres');
        if (this.password !== this.repetPassword) return alert('as senhas devem ser iguais');

        return alert('senha valida');
    }

    validateCpf(){
        const cpfClean = this.cpf.replace(/\D+/g, '');
        function validate(){
            if(!cpfClean) return false;
            if(typeof cpfClean !== 'string') return false;
            if(cpfClean.length !== 11) return false;
            //if(isSequence) return false;

            const cpfCleanTemp = cpfClean.slice(0, -2);
            const digitOne = createDigit(cpfCleanTemp);
            const digitTwo = createDigit(cpfCleanTemp + digitOne);
            const typedCpf = cpfCleanTemp + digitOne + digitTwo;
            return console.log(typedCpf === cpfClean);

        }

        function createDigit(cpfCleanTemp){
            const cpfCleanArr = Array.from(cpfCleanTemp);
            let decrementer = cpfCleanArr.length + 1;
            const total = cpfCleanArr.reduce((ac, value, index) =>{
                ac += (decrementer * Number(value));
                decrementer--;
                return ac;
            }, 0);

            const digit = 11 - (total % 11);
            return digit > 9 ? '0' : String(digit);
        }

        return validate();
    }
}



document.addEventListener('click', function (event) {
    const inputs = document.querySelectorAll('input');
    const name = inputs[0].value;
    const surName = inputs[1].value;
    const cpf = inputs[2].value;
    const user = inputs[3].value;
    const passWord = inputs[4].value;
    const repetPassword = inputs[5].value; 
    const el = event.target;
    if (el.classList.contains('btnSend')) {
        const userInformation = new ValidRegistrationForm(name, surName, cpf, user, passWord, repetPassword);
        userInformation.inputIsEmpty();
        userInformation.validatePassword();
        userInformation.validateUser();
        userInformation.validateCpf();

        console.log(userInformation);
    }
})