const pessoa = { // OBJETO
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco:{ // OBJETO dentro de um OBJETO
        rua: "Av Brasil",
        numero: 320
    }
};
// Atribuição via Desestruturação
/*
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome);
*/

const { nome: n = ""} = pessoa; // Posso mudar o nome da variável através da CHAVE -> "Nome da variável"
console.log(n);

const { endereco } = pessoa
console.log(endereco)

const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero );

const {nome, ...resto} = pessoa;
console.log(resto);