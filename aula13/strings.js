// Barra invertida ela é usada para 'escapar' o caractere
let umaString = "Um \"texto\""
console.log(umaString);

//             01234567
let umTexto = "Um texto";
console.log(umTexto[4]); // ['nº'] É usado para escolher o que deseja imprimir da STRING
console.log(umTexto.indexOf("texto")) // É usado para saber em qual indice começa determinada palavra
console.log(umTexto.lastIndexOf("m", 3)) // Mesma coisa que o 'indexOf' porém de traz para frente

// Concatenaçaão de uma STRING
console.log(umTexto.concat(" em um lindo dia."));
console.log(umTexto + "em um lindo dia.");
console.log(`${umTexto} em um lindo dia.`);

let exemplo = "O rato roeu a roupa do rei de roma."
console.log(exemplo.replace(/r/g, "#")); // replace: Troca uma palavra por outra desejada
console.log(exemplo.length); //length: Mostra quantos caracteres tem a STRING
console.log(exemplo.slice(2, 6)); // slice: Fatia a STRING onde desejar
console.log(exemplo.split(" ", 3)); // split: Divide a STRING em varios array's  
console.log(exemplo.toUpperCase()); // toUpperCase: Deixa a STRING toda em letra maiúscula
console.log(exemplo.toLowerCase()); // toLowerCase: Deixa a STRING toda em letra minúscula