const fs = require("fs");

var counter  = 0,
    info     = '';
for ( var val of process.argv ) {
	counter++;	
	if ( counter > 3) {
		console.log(val);
		const fs1 = require("fs");
		fs.readFile(val, "utf8", (error, data) => {	
			if (error) {
				console.log("Error has happened:");				
				throw error;
			}
		info += data;

		console.log('info = ', info)

		var fileName = ( typeof process.argv[2] != "undefined")? process.argv[2] : "common.txt";
		console.log('fileName=', fileName)
		const fs1 = require("fs");
		fs1.writeFileSync("./"+fileName, info, "utf8");
		
		});		
    }	
}




