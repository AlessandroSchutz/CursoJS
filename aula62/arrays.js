// Valor por referência
//                 0         1        2
const nomes = ["Eduardo", "Maria", "Joana"];
const novo = [...nomes]; // ... => Usando rest operator, ele não irá modificar o valor do array original
console.log(nomes);
console.log(novo);
console.log(nomes.length); // Irá dizer o n° de elementos
novo.push("Joana"); // Adiciona um novo elemento no final do array
novo.unshift("Marcos"); // Adiciona um novo elemento no início do array
console.log(novo);
const removido = novo.pop(); // Remove o último elemento do array
console.log(novo, removido);
const removido2 = novo.shift(); // Remove o primeiro elemento do array
console.log(novo, removido2);

console.log("____________________________________________________")
console.log("")
const novo2 = [...nomes];
novo2.push ("Wallace", "Rosana");
console.log("      0         1        2         3          4")
console.log(novo2);
console.log(novo2.slice(1, -2)); // slice => Irá dividir o array


console.log("____________________________________________________")
console.log("           Convertendo STRING em ARRAY");

const novo3 = "Luiz Otávio Miranda";
console.log(novo3)
const novo4 = novo3.split(" ");
console.log(novo4)

console.log("____________________________________________________")
console.log("           Convertendo ARRAY em STRING");

const novo5 = novo4.join(" ");
console.log(novo5);
