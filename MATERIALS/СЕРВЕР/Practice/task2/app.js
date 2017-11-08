const http = require("http");
const path = require('path');
const fs   = require("fs");
const url  = require('url');

function requestHandler(request, response) {
//http://localhost:3000/index.html?n1=1&n2=2&op=%2B
//осознанно делалось без проверок на нештатные ситуациии - деление - на 0 и т.п. 03:15 AM...
	if (request.url.indexOf('.html') != -1){  
		var query = url.parse(request.url,true).query;
		console.log(query);

		fs.readFile("./index.html", "utf8", (error, data) => {
			data = data.replace("{n1}", query.n1);
			data = data.replace("{n2}", query.n2);
			data = data.replace("{operation}", query.op);	
			var r = eval(query.n1 + query.op + query.n2);;
			console.log('r11',r)
			data = data.replace("{resultat}", r);		
			response.statusCode = 200;
			response.statusMessage = "OK";
			response.setHeader("Content-Type", "text/html");
			response.end(data);	
        });
    }
    
    
};


const server = http.createServer(requestHandler);
server.listen(3000);
