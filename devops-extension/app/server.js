const http = require("node:http");

let requestCount = 0;

const server = http.createServer((req, res) => {
  requestCount++;

  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      status: "UP",
      service: "hybrid-cloud-operations-app"
    }));
  }

  if (req.url === "/metrics") {
    res.writeHead(200, { "Content-Type": "text/plain; version=0.0.4" });
    return res.end(
      "# HELP app_up Application availability\n" +
      "# TYPE app_up gauge\n" +
      "app_up 1\n" +
      "# HELP http_requests_total Total HTTP requests\n" +
      "# TYPE http_requests_total counter\n" +
      `http_requests_total ${requestCount}\n` +
      "# HELP process_uptime_seconds Application uptime\n" +
      "# TYPE process_uptime_seconds gauge\n" +
      `process_uptime_seconds ${process.uptime()}\n` +
      "# HELP process_resident_memory_bytes Resident memory\n" +
      "# TYPE process_resident_memory_bytes gauge\n" +
      `process_resident_memory_bytes ${process.memoryUsage().rss}\n`
    );
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hybrid Cloud Operations</h1><p>Application is running.</p>");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Application listening on port 3000");
});
