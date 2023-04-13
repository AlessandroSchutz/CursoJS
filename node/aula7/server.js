const express = require("express");
const app = express();

/*
            C R U D

    C => Create = Criar -> Post
    R => Read = Ler -> Get
    U => Update = Atualizar -> Put
    D => Delete = Apagar -> Delete

    http://meusite.com/ <- GET -> Entregue a página /
    http://meusite.com/sobre <- GET -> Entregue a página /sobre
    http://meusite.com/contato <- GET -> Entregue a página /contato

*/

app.get("/", (req, res) => {
    res.send(`
    <form action ="/" method ="POST">
    Nome: <input type="text" name="nome">
    <button> Enviar </button>
    </form>
    `);
});

app.post("/", (rep, res) => {
    res.send("Recebi o formulário");
});

app.get("/contato", (rep, res) => {
    res.send("Obrigado por entrar em contato com a gente.");
});

app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});