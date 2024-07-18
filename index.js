var http = require("http");
var url = require("url");
var fs = require("fs");

const page404 = fs.readFileSync("./404.html", "utf8", (err, data) => {
  //ensures 404 page loads
  if (err) throw err;
  return data;
});

http
  .createServer(function (req, res) {
    if (req.url == "/") {
      file = "./index.html";
    } else {
      file = "." + req.url + ".html";
    }

    fs.readFile(file, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(page404);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data + "connected");
        return res.end();
      }
    });
  })
  .listen(8080);
