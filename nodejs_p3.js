var http=require("http");
const port = process.env.PORT || 3000;

var server = http.createServer(function(request,response)
{
    if(request.url=="/")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>Hello This is 19ITL109</h1>");
        response.end("<html><body>This is Home - URL: "+request.url+"</body><html>");
        console.log("Request received");   
    }
    else if(request.url=="/profile")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>Hello This is 19ITL109</h1>");
        response.end("<html><body>This is profile - URL: "+request.url+"</body><html>");
        console.log("Request received");
    }
    else
    {
        response.end("Not a valid Request");
    }

});
server.listen(port);
console.log("server running");