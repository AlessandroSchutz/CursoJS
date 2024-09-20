const { alfabeto } = require("./base");

// [] seleciona conjustos para exibir "[abc]"
// [^] seleciona conjunto para não exibir "[^abc]"
// [0-9] irá exibir todos os numeros, ou letras entre essa sequência

console.log(alfabeto);

// console.log(alfabeto.match(/[abc123]/g));

// console.log(alfabeto.match(/[^abc123]/g));

//  console.log(alfabeto.match(/[0-9]/g));
//  console.log(alfabeto.match(/\d/g)); // Mesma coisa que o de cima

// console.log(alfabeto.match(/[^0-9]/g));
// console.log(alfabeto.match(/\D/g)); // Mesma coisa que o de cima

// console.log(alfabeto.match(/[a-f]/g));

// console.log(alfabeto.match(/[a-z-A-Z0-9]/g));
// console.log(alfabeto.match(/\w/g)); // Mesma coisa que o de cima

// console.log(alfabeto.match(/[^a-z-A-Z0-9]/g));
//  console.log(alfabeto.match(/\W/g)); // Mesma coisa que o de cima

// console.log(alfabeto.match(/[\u00A0-\u00BA]/g)); // Unicode

// console.log(alfabeto.match(/\s/g)); // Espaços em branco
// console.log(alfabeto.match(/\S/g)); // Tudo menos os espaços em branco



