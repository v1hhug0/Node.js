const http = require("http");
const fs = require("fs");
const url = require("url");
var server = http.createServer(function(req, res) {
    if (req.url == "/") {

        fs.readFile("index.html", function(err, data) {
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.write(data);
            res.end();
        });
    } else if (req.url == "/form.html") {
        fs.readFile("form.html", function(err, data) {
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.write(data);
            res.end();
        });
    } else if (req.url == "/cadastro.txt") {
        fs.readFile("cadastro.txt", function(err, data) {
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.write(data);
            res.end();
        });
    } else {
        const q = url.parse(req.url, true);
        const nome = q.query.nome;
        const email = q.query.email;
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf8"
        });
        res.write('<html>');
        res.write('<head>');
        res.write('<link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity = "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin = "anonymous">');
        res.write('<title>Resposta Formulário</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <a class = "navbar-brand" href = "/" > Home </a> <button class = "navbar-toggler" type = "button" data - toggle = "collapse" data - target = "#navbarNav" aria - controls = "navbarNav" aria - expanded = "false" aria - label = "Toggle navigation"> <span class = "navbar-toggler-icon" > < /span> </button > <div class = "collapse navbar-collapse" id = "navbarNav" > <ul class = "navbar-nav" > <li class = "nav-item" > <a class = "nav-link" href = "form.html" > Cadastrar </a> </li > <li class = "nav-item" > <a class = "nav-link" href = "cadastro.txt" > Listar </a> </li > </ul > </div > </nav >');
        res.write('<h1>Olá ' + `${nome}` + '</h1>');
        res.write('<h2>Confirme seus dados:</h2>');
        res.write('<p>Seu nome: ' + `${nome}` + '</p>');
        res.write('<p>Seu email: ' + `${email}` + ' </p>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        if (`${nome}` != "undefined" && `${email}` != "undefined") {
            fs.appendFile('cadastro.txt', `${nome}` + "\t" + `${email}` + "\n", (err) => {
                if (err) throw err;
            });
        }
    }
});
server.listen(3000);
console.log("Servidor rodando na porta 3000");