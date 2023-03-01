/*
    ...(spread) => Copia "OBJ's"
    Object.assign(des, any) => Copia "OBJ's"
    Object.getOwnPropertyDescriptor("OBJ", "PROP") => Retorna as propriedades do método
    Object.values => Retorna os valores das chaves
    Object.entries => Retorna os valores e as chaves, separando cada chave em um array

    // Já vimos
    Object.keys => Retorna as chaves dos valores
    Object.freeze => Congela o objeto
    Object.defineProperties => Define várias propieades
    Object.defineProperty => Define uma propriedade
*/

const produto = {nome: "Faca", preco: 1.8};

// Spread
const produto2 = {
    ...produto,
    material: "Porcelana" // Pode criar novos "Métodos" dentro da copia de um "OBJ".
};

// Object.assing
const produto3 = Object.assign({}, produto, {material: "Aço Inox"}); // Pode criar novos "Métodos" dentro da copia de um "OBJ".

const produto4 = {nome: produto.nome, preco: produto.preco}; // Copia um "OBJ"

Object.defineProperty(produto, "nome", {
    writable: false,
    configurable: false
});

// Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(produto, "nome")); 
produto.nome = "Outra coisa";
console.log(produto);

console.log("__________________________________________________");
console.log("")

// Object.values
console.log(Object.values(produto));

console.log("__________________________________________________");
console.log("")

// Object.entries
console.log(Object.entries(produto2));

for( let [chave, valor] of Object.entries(produto2)){
    console.log(chave, valor);
}

console.log("__________________________________________________");
console.log("")

produto2.nome = "Caneca";
produto2.preco = 2.5;

console.log(produto2);

console.log("__________________________________________________");
console.log("")

console.log(produto3);

console.log("__________________________________________________");
console.log("")

console.log(produto4);