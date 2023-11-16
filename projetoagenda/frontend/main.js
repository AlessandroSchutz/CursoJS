import "core-js/stable";
import "regenerator-runtime/runtime";

import Login from './modules/Login';
import Contato from './modules/Contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contato = new Contato('.form-contato');
const contatoEdit = new Contato('.form-edit')

login.init();
cadastro.init();
contato.init();
contatoEdit.init();
// import "./assets/css/style.css";

