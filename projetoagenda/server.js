require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit("pronto");
    })
    .catch(e => console.log(e));

const session = require("express-session"); 
const MongoStore = require("connect-mongo"); // Salva as sessões dentro da base de dados
const flash = require("connect-flash"); // Mensagens autodestrutivas (mensagens de erro/avisos)

const routes = require("./routes") // Rotas das aplicações
const path = require("path"); 
//const helmet = require("helmet"); // Recomendação do "express" DUVIDA -> (ler a documentação)
const csrf = require("csurf"); // Segurança do site DUVIDA -> (ler a documentação)
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require("./src/middlewares/middleware"); 

//app.use(helmet());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
    secret: "texto que ninguem vai saber",
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized:false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // tempo que vai durar o cookie (7 dias)
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING })
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on("pronto", () => {
    app.listen(3001, () => {
        console.log("Acessar http://localhost:3001");
        console.log("Servidor executando na porta 3001");
    });
});