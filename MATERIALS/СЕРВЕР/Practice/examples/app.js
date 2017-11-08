const http = require("http");
const path = require('path');
const fs   = require("fs");
const url  = require('url');

function requestHandler(request, response) {
	if (request.url.indexOf('.html') != -1){ 
		fs.readFile("./index.html", "utf8", (error, data) => {
			response.statusCode = 200;
			response.statusMessage = "OK";
			response.setHeader("Content-Type", "text/html");
			response.end(data);	
        });
    }
    
    if(request.url.indexOf('.css') != -1){
			fs.readFile("./style.css", "utf8", (error, data) => {
		    response.statusCode = 200;
		    response.statusMessage = "OK";
			response.setHeader("Content-Type", 'text/css');
			response.end(data);	
		});
	}
};


const server = http.createServer(requestHandler);
server.listen(3000);
