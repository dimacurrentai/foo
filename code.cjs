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
  if (req.url == "/e" && req.method == "POST") {
    let s = '';
    req.on("data", c => {
      s += c.toString();
    });
    req.on("end", () => {
      try {
        const j = JSON.parse(s);
        res.end(`RECEIVED:\n${JSON.stringify(j, null, 2)}\n`);
      } catch (e) {
        res.end(`NOT A JSON: ${e}\n`);
      }
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
    });
  } else {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end('Please POST a JSON to `/e`.\n');
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});