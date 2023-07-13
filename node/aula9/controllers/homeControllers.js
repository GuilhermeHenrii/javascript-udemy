exports.homePage = (req, res) => {
    res.send(`
    <form action = "/" method = "POST">
    Tecnologia: <input type = "text" name = "tec"><br>
    Sobrenome: <input type = "text" name = "sobrenome">
    <button>Enviar</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send(`O tecnologia enviada foi: ${req.body.tec}`);
    console.log(exports);
};