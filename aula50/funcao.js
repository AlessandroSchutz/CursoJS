// Argumentos que sustenta todos os argumentos enviados
function argumento(){
    console.log(arguments[10]); // A variável "arguments", transforma todos os elementos da variável em um objeto
}
argumento("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Ale");

console.log("____________________________")

function somaDeNumeros(a, b, c, d, e){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total, "|", a, b, c, d, e);
}
somaDeNumeros(1, 2, 3, 4, 22);

console.log("____________________________")

function soma(a, b = 0){

    console.log(a + b);
}
soma(2);

console.log("____________________________")

function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao({nome: "Luiz", sobrenome:"Otávio", idade: 20});

console.log("____________________________")

function conta(operador, acumulador, ...numeros){ // ... => Resto da função
    for (let numero of numeros) {
    if (operador === "+")    acumulador += numero;
    if (operador === "-")    acumulador -= numero;
    if (operador === "/")    acumulador /= numero;
    if (operador === "*")    acumulador *= numero;
    }
    console.log(acumulador);
};
conta("+", 0, 20, 30, 40, 50);

console.log("____________________________")

const resto = (...args) => {
    console.log(args);
};
resto("+", 1, 20, 30, 40, 50);