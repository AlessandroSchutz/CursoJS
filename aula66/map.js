// Dobre os números
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// Para cada  elementos:
// Retorne apenas uma string com o nome das pessoas
// Remova apenas a chave "NOME" do objeto
// Adicione uma chave "ID" em cada objeto

const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idade = pessoas.map(obj => ({ idade: obj.idade}));
console.log(idade);

const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};  // Cria um novo array para não modificar o array original
    newObj.id = (indice + 1)* 1000;
    return newObj;
});
console.log(comIds);
