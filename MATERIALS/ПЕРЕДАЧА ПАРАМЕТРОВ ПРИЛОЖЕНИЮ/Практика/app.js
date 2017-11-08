var counter     = 0, 
    firstParam  = 0,
    secondParam = 0;

//less than 3 params
if ( process.argv.length != 5 ) {
	console.log('Default params has been used: result = ' + (firstParam - secondParam))
    return true;
}

if ( typeof process.argv[2] == "undefined" || typeof process.argv[4] == "undefined" || isNaN(process.argv[2]) || isNaN(process.argv[4])) {
	console.log('Please, enter correct params (numeric only)');
	return false;
}

if ( typeof process.argv[3] == "undefined" ||  ( process.argv[3] != "-" && process.argv[3] != "+")) {
	console.log('Please, enter correct operation (+/-)');
	return false;
}

firstParam  = parseFloat(process.argv[2]);
secondParam = parseFloat(process.argv[4]);

let result = ( process.argv[3] == '-' )? firstParam - secondParam : firstParam + secondParam;
console.log('Result1 = ',  result );
return true;
