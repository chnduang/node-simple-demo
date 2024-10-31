const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("url success--");
  }
});

server.listen(9090, () => {
  console.info("server is start port 9090");
});
