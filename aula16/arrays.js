//               0       1        2
const alunos = ["Luiz", "Maria", "João"];
console.log(alunos)
console.log(alunos[2]); // [ ]: Escolhe um dos nomes dentro do array 

alunos[0] = "Eduardo" // Troca o nome selecionado por outro 
console.log(alunos)
/*
delete alunos[1]; // Ira excluir o nome armazenado nesse espaço, porem não o substituira por nenhum outro
console.log(alunos[1]) // O valor será UNDEFINED, pois o valor foi deletado e não substituido
*/
//              ADICIONAM MAIS UM ESPAÇO NO FINAL DO ARRAY

console.log(alunos.length); // alunos.length: Para saber o tamanho do array
alunos[3] = "Luiza"; // Cria um novo espaço no array, porem precisa saber qual o tamanho do array
console.log(alunos)
alunos[alunos.length] = "Marcos" // Cria um novo espaço no array sem precisar saber o tamanho do array
console.log(alunos)
alunos.push("Lucas"); // Cria um novo espaço no array automaticamente
console.log(alunos)

const removido = alunos.pop(); // .pop(): Remove o ultímo espaço do array 
console.log(removido); // Imprime o nome que estava armazenado no ultimo espaço do array 
console.log(alunos);

//              ADICIONAM MAIS UM ESPAÇO NO INICIO DO ARRAY

alunos.unshift("José") // Cria um novo espaço no array automaticamente
console.log(alunos)

const remove = alunos.shift(); // .shift(): Remove o primeiro espaço do array
console.log(remove); // Imprime o nome que estava armazenado no primeiro espaço do array
console.log(alunos);

//------------------------------------------------------------------------------------------------------------

console.log(alunos.slice(0, -3)); // Irá fatiar o array 

