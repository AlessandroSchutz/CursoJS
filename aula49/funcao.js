// Declaração de função
falaOi();
function falaOi(){
    console.log("Oie");
}

// First-class objects (Objetos de primeira classe)
// Function Expression
const souUmDado = function(){
    console.log("Sou um dado.");
};
souUmDado();

// Arrow Function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log("Estou falando...");
    }
};
obj.falar();