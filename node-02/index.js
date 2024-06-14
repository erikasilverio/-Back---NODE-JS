const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type" : "text/plain" });
    res.end("Hola de HTTP");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));