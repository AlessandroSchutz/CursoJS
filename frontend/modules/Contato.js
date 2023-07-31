let validator; // Deixe a importação vazia inicialmente

import(/* webpackChunkName: "validator" */ "validator")
  .then((module) => {
    // Quando o módulo for carregado sob demanda, atribua-o à variável "validator"
    validator = module.default || module;
  })
  .catch((error) => {
    // Trate possíveis erros no carregamento
    console.error("Erro ao carregar o módulo 'validator':", error);
});

export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
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
    }

    validate(e){
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        const errorMessages = el.querySelectorAll(".erro");
        errorMessages.forEach(message => message.remove());

        if(nomeInput.value.length === 0){
            let p = document.createElement("p");
            let errorMsg = document.createTextNode("Nome é um campo obrigatório.");
            p.appendChild(errorMsg);
          p.classList.add('erro');
          p.classList.add('alert-danger');
          passwordInput.after(p);
          error = true;
        }

        if(!telefoneInput.value && !validator.isEmail(emailInput.value)){
            if(telefoneInput.value.length < 9 || telefoneInput.value.length > 13){
                let p = document.createElement("p");
                let errorMsg = document.createTextNode("Informe um e-mail ou telefone válido");
                p.appendChild(errorMsg);
                p.classList.add('erro');
                p.classList.add('alert-danger');
                telefoneInput.parentNode.appendChild(p);
                error = true
            }   
        }

        if(!error) el.submit();
    }
}