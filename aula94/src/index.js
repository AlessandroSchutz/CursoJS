// import => É usado para importar constantes de outros módulos
// import * as MeuModulo from "./modulo1"; // É usado para importar todas as constantes de outro módulo que estejam marcadas para exportar;

import { nome as nome2, sobrenome, idade, Pessoa } from "./modulo1";

import qualquerNome from "./modulo1"; // Usado para importar function "default" de outros módulos
console.log(qualquerNome(5, 5));

// as => Muda o 'nome' de uma constante importada para outro 'nome' e não causar conflito com uma constante existente, o mesmo se aplica na exportação.
const nome = "João";

console.log(nome, nome2, sobrenome, idade);

const p1 = new Pessoa("Alessandro", "Schutz");
console.log(p1);
