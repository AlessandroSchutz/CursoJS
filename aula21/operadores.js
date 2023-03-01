/*
    Operadores de comparação
        >    -> Maior Q 
        >=   -> Maior Q || Igual A
        <    -> Menor Q
        <=   -> Menor Q || Igual A
        ==   -> Igualdade (Valor) {_Não é recomendavél utilizar esse operador_}
        ===  -> Igualdade Estrita (Valor e Tipo) {_Use esse_}
        !=   -> Diferente (Valor) {_Não é reocmendável utilizar esse operador_} 
        !==  -> Diferente Estrito (Valor e Tipo) {_Use esse_}
*/

const num1 = 10;
const num2 = '10';
const comp1 = num1 === num2; // Usando [ === ] Ele irá checar tanto o VALOR quanto o TIPO 
console.log(comp1);

const comp2 = num1 !== num2; // Usando [ !== ] Ele irá checar tatno o VALOR quanto o TIPO
console.log(comp2);


