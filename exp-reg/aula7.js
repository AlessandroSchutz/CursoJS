const { cpfs2 } = require("./base");

// ^ => começa com
// $ => termina com
// [^] => dentro do conjunto é para negar
// m -> multiline

// const cpf = "254.224.877-45";
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
// console.log(cpf.match(cpfRegExp));
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
