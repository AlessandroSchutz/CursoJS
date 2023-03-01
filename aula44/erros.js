/*
try { // try -> Irá tentar executar caso dê erro, ele irá exibir a mensagem do proximo bloco
    console.log(naoExisto);
} catch(err){ // cath -> Irá exibir a mensagem de erro
    // Nunca mostre ao usuário final o erro que ocorreu no seu sistema 
    console.log("naoExisto, Não existe.");
    console.log(err);
} 
*/

function soma(x, y) {
    if (typeof  x !== "number" || typeof y !== "number") {
        throw new Error("X e Y precisam ser números.");
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma("1", 2));
}catch(error) {
    //console.log(error);
    console.log("Alguma coisa mais amigável pro usuário.")
    
}

