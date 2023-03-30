/*
const mod1 = require("./mod1"); 

// const falaNome = require("./mod1").falaNome; // .falaNome => importa apenas uma função.
// const falaNome = mod1.falaNome // Irá fazer a mesma coisa que acima porem sera exportado todas as funções, apenas renomeei uma das funções.
console.log(mod1.falaNome());

const {nome, sobrenome, falaNome} = require("./mod1");
console.log(nome, sobrenome);
console.log(falaNome());
*/

const path = require("path");
const axios = require("axios");
const {Pessoa} = require("./mod1");

const p1 = new Pessoa("Jão");
console.log(p1);