// For Clássico - Geralmente con iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)


const nome = ["Luiz", "Otávio", "Henrique"];

console.log("For Clássico")

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log("_________")
console.log("For In")

for (let i in nome){
    console.log(nome[i]);
}

console.log("_________")
console.log("For Of")

for (let valor of nome){
    console.log(valor);
}

console.log("_________")

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});