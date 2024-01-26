// g -> global (Encontra todas as ocorrências)
// i -> insensitive
// () -> grupo
// (()()) -> grupos dentro de grupo
// | -> ou


const {texto}= require('./base');

const regExp1 = /(pão|rosca|maçã)( de queijo)/i;
const found = regExp1.exec(texto);

if(found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}
