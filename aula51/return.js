// return => Retorno da função / Termina a função

function soma(a, b){
    return a + b;
}

function criaPessoa(nome, sobrenome){
    return{nome, sobrenome};
}

const p1 = criaPessoa("Alessandro", "Schutz");
const p2 = {
    nome: "João",
    sobrenome: "Oliveira"
};

console.log(p1);
console.log(p2);

console.log("___________________________________________")

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

console.log("___________________________________________")

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
