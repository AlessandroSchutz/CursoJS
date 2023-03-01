function soma(x = 1, y = 1){ // x=1,y=1: só serão usados os valores caso não seja dado outros valores a eles
    const  resultado = x + y;
    return resultado;
}

const resultado = soma(4, 2); // Irá enviar os valores para a função e fazer a soma 
console.log(resultado)
console.log("")

const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log("")

const raizq = (n) => n ** 0.5; // Essa é uma função chamada de ArrowFunction, mesma coisa que a de cima porem simplificada

console.log(raiz(81));