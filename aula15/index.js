let num1 = 9.678;

let num2 = Math.floor(num1); // Math.floor: Arredonda para baixo
console.log(num2)

let num3 = Math.ceil(num1); // Math.ceil: Arredonda para cima
console.log(num3)

let num4 = Math.round(num1); // Math.round: Arredonda para o número mais próximo
console.log(num4)

console.log(Math.max(1,2,3,4,5,-1,-10,50,94)); // Math.max: Vai imprimir o maior número da sequência

console.log(Math.min(1,2,3,4,5,-1,-10,50,94)); // Math.min: Vai imprimir o menor número da sequência

const aleatorio = Math.random() * (10 - 5) + 5 ; // Math.random: Vai imprimir um número aleatório 
console.log(aleatorio);

console.log(Math.PI); // Math.PI: Vai imprimir o valor de PI 

let num5 = 9;
console.log(num5 ** 0.5); // Ira calcular a raiz quadrada 

//      -ATENÇÃO-

console.log(100 / 0); // No JavaScript um número é divisível por 0
