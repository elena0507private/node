const http = require("http");
const path = require('path');
const fs   = require("fs");
const url  = require('url');

function requestHandler(request, response) {
	content = fs.readFile("./task3/word-doc-example.doc", (error, data) => {
		response.statusCode = 200;
		response.statusMessage = "OK";
		response.setHeader("Content-Type", "application/msword");
        response.setHeader('Content-disposition', 'attachment; filename=word-doc.doc');		
		response.end(data);	
	});		
};


const server = http.createServer(requestHandler);
server.listen(3000);
