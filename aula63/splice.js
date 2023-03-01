//                0        1        2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// nomes.splice(índice atual, delete, adiciona elementos);
const removidos = nomes.splice(3, Number.MAX_VALUE ); // Number.MAX_VALUE => Irá remover todos os elementos adiante dele
console.log(nomes, removidos);

nomes.splice(3, 1, "Luiz"); // Irá adicionar um novo elemento no array desejado 
console.log(nomes)

// pop 
const removidos2 = nomes.splice(-1, 1)
console.log(nomes, removidos2)

// shift
const removidos3 = nomes.splice(0, 1);
console.log(nomes, removidos3)

// push 
nomes.splice(nomes.length, 0, "Marcos");
console.log(nomes);

// unshift
nomes.splice(0, 0, "José", "Mario");
console.log(nomes);