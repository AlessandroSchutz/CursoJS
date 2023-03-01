/*
console.log("Linha 0")
console.log("Linha 1")
console.log("Linha 2")
console.log("Linha 3")
console.log("Linha 4")
console.log("Linha 5")
*/
// Ao invés de ter que escrever linha por linha podemos utilizar o FOR (Estrutura de Repetição)

// i - index
for (let i = 0; i <= 10; i++) {
    const par  = i % 2 === 0 ? "Par" : "ímpar";
    console.log(`${i} é: ${par}`);
}

console.log("------------")

const frutas = ["Maçã", "Pêra", "Uva"];
 for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}: ${frutas[i]}`);
}


