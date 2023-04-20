exports.paginaInicial = (req, res) => {
    console.log("Respondendo ao cliente.");
    res.render("index");
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};