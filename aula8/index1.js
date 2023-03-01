const nome = "Alessandro";
const sobrenome = "Schutz";
const idade = 20;
const peso = 95;
const alturaEmM = 1.75;
let imc; // peso / (altura* altura)
let anoNascimento; 

imc = peso/(alturaEmM*alturaEmM)
anoNascimento = 2022 - idade

console.log(nome, sobrenome, "nasceu em", anoNascimento, "tem", idade, "anos, pesa", peso, "Kg, tem", alturaEmM, "de altura e seu IMC é de", imc)

// Poderia escrever assim tambem 

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} tem ${idade} anos, pesa ${peso} Kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}`)

// Essa forma é a mais facil e simples de se entender o codigo