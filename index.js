var http = require('http').Server(app);
http.createServer(function(req,res){
    response.writeHead(200, {"Content-Type":"text/plain"})
    response.end("hello \n")
}).listen(process.env.PORT)