let num1 = 150.59877;
let num2 = 2.5;

console.log(num1.toString()+ num2); // toString: Passa temporariamente o número para STRING
// num1 = num1.toString(); // Dessa forma passa definitivamente o número para uma STRING
console.log(num1.toString(2)); // Representação binária do número 
console.log(num1.toFixed(2)); // toFixed: Nº de casas decimais que irá aparecer
console.log(Number.isInteger(num1)); // Number.isInteger: Vai dizer se o número é INTEIRO = (TRUE) ou REAL = (FALSE)
let temp = num1 * '5';
console.log(Number.isNaN(temp)); // Number.isNaN: Vai dizer se a conta é inválida = (TRUE) 
console.log("__________________________________")
console.log("")

let num3 = 0.7;
let num4 = 0.1;
/*
    // Desse jeito o JavaScript irá calcular errado 

num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.0

console.log(num3)
*/
    // Dessa forma o JavaScript irá calcular certo

num3 = ((num3 * 100) + (num4 * 100)) / 100;
num3 = ((num3 * 100) + (num4 * 100)) / 100;
num3 = ((num3 * 100) + (num4 * 100)) / 100;

console.log(num3);
console.log(Number.isInteger(num3));
