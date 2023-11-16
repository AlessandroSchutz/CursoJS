import validator from "validator";

export default class Contato{
    constructor(formContato){
        this.form = document.querySelector(formContato);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            this.validate(e);
        });

        const inputs = this.form.querySelector("input");
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                this.clearErrorMessage(input);
            });
        });
    }


    validate(e){
        const el = e.target;
        const nomeInput = el.querySelector("input[name= 'nome']").value;
        const sobrenomeInput = el.querySelector("input[name= 'sobrenome']").value;
        const emailInput = el.querySelector("input[name= 'email']").value;
        const telefoneInput = el.querySelector("input[name= 'telefone']").value;
        const erroNome = document.querySelector(".erro-nome");
        const erroSobrenome = document.querySelector(".erro-sobrenome");
        const erroEmail = document.querySelector(".erro-email");
        const erroTelefone = document.querySelector(".erro-telefone");

        this.clearErrorMessage(erroNome);
        this.clearErrorMessage(erroSobrenome);
        this.clearErrorMessage(erroEmail);
        this.clearErrorMessage(erroTelefone);

        let error = false;

        if (nomeInput.trim() === "") {
            this.displayErrorMessage(erroNome, "Campo Nome precisa ser preenchido");
            error = true;
        }

        if (sobrenomeInput.trim() === "") {
            this.displayErrorMessage(erroSobrenome, "Campo Sobrenome precisa ser preenchido");
            error = true;
        }

        if (emailInput.trim() !== "" && !validator.isEmail(emailInput)) {
            this.displayErrorMessage(erroEmail, "E-mail inválido!");
            error = true;
        }

        if (emailInput.trim() === "" && telefoneInput.trim() === "") {
            this.displayErrorMessage(erroTelefone, "Pelo menos um contato precisa ser enviado: e-mail ou telefone.");
            error = true;
        }

        if (!error) el.submit();
    }

    displayErrorMessage(element, message) {
        element.textContent = message;
    }

    clearErrorMessage(element) {
        element.textContent = "";
    }
}





