const verdadeira = true;

// Let tem escopo de bloco {...Bloco }
// var só tem escopo de função 

let nome1 = "Luiz";// Criando 
var nome2 = "Luiz"; // Criando 

if (verdadeira){
    let nome1 = "Otávio"; // Cria outra variável dentro desse bloco
    var nome2 = "Rogério"; // Redeclarando
    console.log(nome1, nome2);

    if (verdadeira) { // Bloco aninhado
        let nome1 = "Outra coisa"; // Cria outra variável dentro desse bloco aninhado
        var nome2 = "Ronaldo"; // Redeclarando
        console.log(nome1, nome2);
    }
}
console.log(nome1, nome2); // Vai pegar o LET GLOBAL para imprimir, e o ultimo VAR declarado

var sobrenome = "Miranda";

function falaOi(){
    var nome3 = "Luiz"; 
    console.log(nome3); // Só posso chamar esse VAR dentro da função 
    console.log(sobrenome); // Porém posso chamar um VAR fora da função usando a função 
}
falaOi();

