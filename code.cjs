const http = require("http");

process.on("SIGINT", () => {
  console.log("\nReceived SIGINT. Cleaning up...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\nReceived SIGTERM. Cleaning up...");
  process.exit(0);
});

const PORT = 8888;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Hello, World!\n");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
