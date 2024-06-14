const http = require("http");
const fs = require("fs");
const path = require("path")



const server = http.createServer((req, res) => {

            // console.log(__dirname);            
            // console.log(path.join(__dirname, "public", "index.html"));
            //     const pathFile = "./public/index.html";

        const pathFile = path.join(__dirname, "public", "index.html");

        const html = fs.readFileSync(pathFile);

    res.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" });
    res.end(html);
});


const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));