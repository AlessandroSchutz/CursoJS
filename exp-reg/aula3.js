const { texto, arquivos } = require("./base");

//  * (opcionais) 0 ou n  => {0,}
//  + (obrigatório) 1 ou n => {1,}
//  ? (opcionais) 0 ou 1 => {0, 1}
//  \ Caractere de escape
//  {'valor mínimo', 'valor máximo'} escolhe os valores {1,10} mínimo/máximo

// console.log(texto);
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.jpe*g/gi;
const regExp3 = /\.jpe+g/gi;
const regExp4 = /\.jpe?g/gi;
const regExp5 = /\.jpe{0,1}g/gi;
const regExp6 = /\.(jp|JP)(e|E)?(g|G)/g;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp5);

   if (!valido) continue;

  console.log(arquivo, valido);
}
