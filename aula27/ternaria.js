// ? :
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ?        "Usuário VIP"           :        "Usuário Normal";
//    [VARIÁVEL]   =       [CONDIÇÃO]         ? [VALOR SE A CONDIÇÃO FOR TRUE] : [VALOR SE A CONDIÇÃO FOR FALSE];
const corUsuario = null;
const corPadrao = corUsuario  || "Preta";
console.log(nivelUsuario, corPadrao);
/*  ESSE CÓDIGO ABAIXO FAZ O MESMO QUE A LINHA ACIMA
if (pontuacaoUsuario >= 1000){
    console.log("Usuário VIP");
} else {
    console.log("Usuário Normal");
}
*/
