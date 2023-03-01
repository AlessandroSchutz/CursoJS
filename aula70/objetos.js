const pessoa = {
    nome:  "Luiz",
    sobrenome: "Otávio"
};

const chave = "sobrenome"
console.log(pessoa.nome); // Anotação de ponto é mais pratica
console.log(pessoa[chave]); // Anotação de colchete é mais verbosa 

console.log("__FUNÇÕES_CONSTRUTORAS__");
console.log("");

const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";
pessoa1.idade = 30;
pessoa1.falarNome = function(){
    return(`${this.nome} está falando seu nome.`);
};
// delete pessoa1.nome;  // Deleta o objeto nome.

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(chave);
}

console.log("")
console.log("__FACTORY_FUNCTIONS__&__CONSTRUCTOR_FUNCTIONS__");
console.log("");

function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;  
        }
    };
}

const p1 = criaPessoa("Luiz", "Otávio");
console.log(p1.nomeCompleto);


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(p2); // Irá travar o objeto, (não irá mudar o objeto).
}

const p2 = new Pessoa("Luiz", "Miranda");
p2.nome = "Outra Coisa"
const p3 = new Pessoa("Luiz", "Miranda");


