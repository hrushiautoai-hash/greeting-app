const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/greet") {
    const name = parsedUrl.query.name || "stranger";
    res.end(JSON.stringify({ message: "Hello, " + name + "! 👋" }));
  } else {
    res.end(JSON.stringify({ message: "Wrong path" }));
  }

});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});