import "core-js/stable";
import "regenerator-runtime/runtime";
import "./assets/css/style.css";

import Login from "./modules/Login";
const login = new Login(".form-login");
login.init();
const cadastro = new Login(".form-cadastro");
cadastro.init();

import Contato from "./modules/Contato";
const contato = new Contato(".contato");
contato.init();
