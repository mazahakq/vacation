const http = require("http");
var serveStatic = require("serve-static");
var serve = serveStatic("./pages");

var server = http.createServer(function(request,response){  
    serve(request, response);
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});


