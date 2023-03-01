//  Valores Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) -> VALORES COPIADOS

let a = "A";
let b = a;  // Cópia
console.log(a,b);

a = "Outra coisa"; // Somente "a" irá mudar 
console.log(a,b);

console.log("-------------------------------");

//  Valores Por Referência (mutável) - array, object, function -> VALORES PASSADOS POR REFERÊNCIA

let c = [1, 2, 3];
let d = c; // "d" aponta para o valor em "c", portanto se eu mudar o valor de "c" irei mudar o valor em "d" tambem
let e = d;
console.log(c, d);

c.push(4); 
console.log(c, d);

d.pop(); // Como "d" e "c" apontam para o mesmo valor na memória se eu mudar um, mudo todos
console.log(c, d);

c.push("Luiz"); // Mudei "c", automaticamente mudei "e" tambem
console.log(e);

d = [... c]; // d = [... c] : Dessa forma irei copiar o valor de "c" para "d", fazendo com que ele se torne independente de "c", dessa forma se eu mudar "d", não irei mudar "c"
d.pop();
console.log(c, d);

console.log("-------------------------------")

