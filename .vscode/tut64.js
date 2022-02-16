const http = require("http");
const fs = require("fs");
const fileread = fs.readFileSync('web2CSS.html');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end(fileread);

})
server.listen(80, '127.0.0.1' ,()=>{
    console.log("listening port 80")
})