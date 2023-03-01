function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao("Luiz");
const funcao2 = retornaFuncao("João");
console.dir(funcao); // console.dir => Mesma coisa que o "console.log", porem no navegador ele mostra as especificações da função;
console.dir(funcao2);
console.log(funcao(), funcao2());
