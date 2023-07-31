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

export default class Login {
    constructor(formClass) {
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

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;
      
        // Remover todas as mensagens de erro antigas (elementos <p>) antes de validar novamente
        const errorMessages = el.querySelectorAll('.erro');
        errorMessages.forEach(message => message.remove());
      
        // Validar o campo de e-mail
        if (!validator.isEmail(emailInput.value)) {
          let p = document.createElement('p');
          let errorMsg = document.createTextNode('Email inválido');
          p.appendChild(errorMsg);
          p.classList.add('erro');
          p.classList.add('alert-danger');
          emailInput.after(p);
          error = true;
        }
      
        // Validar o campo de senha
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
          let p = document.createElement('p');
          let errorMsg = document.createTextNode('A senha precisa ter entre 3 e 50 caracteres');
          p.appendChild(errorMsg);
          p.classList.add('erro');
          p.classList.add('alert-danger');
          passwordInput.after(p);
          error = true;
        }

        if(!error) el.submit();
    }
}      