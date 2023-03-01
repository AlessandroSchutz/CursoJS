//               0     1     2     3     4     5     6     7     8  
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
/*
const [um, dois, tres, ...resto] = numeros; // ...rest, ...spread
console.log(um, dois, tres);
console.log(resto);
*/

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete)

//             UM ARRAY DENTRO DE OUTRO ARRAY
//                0          1          2
//             0  1  2    0  1  2    0  1  2
const num = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(num[1][2]) // PRIMEIRO Nº é para escolher o array o SEGUNDO Nº é para escolher o valor do ARRAY
const [lista1, lista2, lista3] = num;
console.log(lista3[2]);