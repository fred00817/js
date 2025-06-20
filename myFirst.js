var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Worl!");
  })
  .listen(8080); // Changed from 8080 to 3000
