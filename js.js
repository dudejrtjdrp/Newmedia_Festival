var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);

app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});
server.listen(80);