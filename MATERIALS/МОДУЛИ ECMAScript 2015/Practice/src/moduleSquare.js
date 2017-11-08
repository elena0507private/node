//please, run node app.js to view some results

export function foo(...args) {

	console.log('Modules: calculations: (function run with params: foo(3,2);)');

	var argums = args, s = null, p = 0, hasErrors = false, 
	mul = 1, 
	sum = 0;

	if ( args.length != 2 ) {
		console.log('Please, input correct params');
		hasErrors = true;
		return false;
	}

	argums.filter(function(v){
		if (isNaN(v) || parseFloat(v) < 0 ){
			hasErrors = true;
		}
	});

	if ( hasErrors == true ) {
		console.log('Please, input correct params. They should be more than 0 and numerical.');
		return false;
	}

	for(var val of argums ){ 
		if (val && s == null ) {
			s = 1;
		}
		s = s * val; 
	}

	for(var v1 of argums ){ 
		sum = sum + v1; 
	}

	p = sum * 2;

	console.log('S = ', s == null? 'result is not defined' : s);
	console.log('P = ', p);
	
}


