// IIFE -> Immediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = "Schutz";
    function criaNome(nome){
        return nome + " " + sobrenome;
    }

    function falaNome(){
        console.log(criaNome("Alessandro"));
    }

    falaNome();
console.log(`Idade: ${idade} anos; Peso: ${peso}Kg; Altura: ${altura}`);

})(20, 90, 1.80);

