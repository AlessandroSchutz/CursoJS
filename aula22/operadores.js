/*
        Operadores Lógicos
        &&  -> AND -> E     -> Todas as expressões precisam ser verdadeiras para retornar TRUE 
        ||  -> OR  -> OU    -> Apenas uma expressão precisa ser verdadeira para retornar TRUE
        !   -> NOT -> NÃO   -> Ele inverte o valor da expressão 
*/
const expressaoAnd = true && true && true;
console.log(expressaoAnd);

const expressaoOr = true || false;
console.log(expressaoOr);

console.log(!true);