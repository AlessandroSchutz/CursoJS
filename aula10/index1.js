/* 
          Operadores Aritméticos
    *   [ + ]    Adição || Concatenação
    *   [ - ]    Subtração
    *   [ * ]    Multipicação
    *   [ / ]    Divisão
    *   [ ** ]   Potenciação
    *   [ % ]    Resto da divisão
*/

/*
    Ordem de Precedencia dos Operadores Aritméticos
            1º    |       ()         |
            2º    |       **         |
            3º    |      * / %       |
            4º    |      +  -        |
*/
const num1 = 10;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

/*
    [ ++ ]   Operadores de Incremento
    [ -- ]   Operadores de Decremento
*/

let contador1 = 5;
let contador2= 6;
contador1++;
console.log(contador1);
contador2--
console.log(contador2);

/*
          Operadores de Atribuição  
    [ += ] ->   contador = contador + 2 
    [ -= ] ->   contador = contador - 2
    [ *= ] ->   contador = contador * 2
    [ /= ] ->   contador = contador / 2
    [ **= ] ->  contador = contador ** 2
    [ %= ] ->   contador = contador % 2
*/

let contador = 10;
contador += 2;
console.log(contador); 
contador -= 2;
console.log(contador);
contador *= 2;
console.log(contador);
contador /= 2;
console.log(contador);
contador **= 2;
console.log(contador);
contador %= 2;
console.log(contador);

/*
*    NaN -> Not a number
*    parseInt -> Passa o número considerado uma STRING para número inteiro
*    parseFloat -> Passa o número considerado uma STRING para um número real
*    Number -> Passa o número considerado uma STRING para um número, seja ele inteiro ou real
*/

const nº1 = 10;
const nº2 = parseInt('5');
console.log(nº1 + nº2);
const nº3 = parseFloat('10.7')
console.log(nº1 + nº2 + nº3);
const nº4 = Number('0.2')
console.log(nº1 + nº2 + nº3 + nº4);