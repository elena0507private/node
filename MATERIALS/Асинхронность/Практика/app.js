function random(min, max, delay, callback) {

	if ( typeof delay == "undefined") {
		delay  = 4;
	}	

	if ( typeof min == "undefined" || typeof max == "undefined" || isNaN(min) || isNaN(max) ) {
		error = new Error("Incorrect Params (not numbers)");
	}

	var minFloat    = parseFloat(min),
        maxFloat    = parseFloat(max),
	    randomDigit = undefined,
        error       = undefined;

	if (minFloat < maxFloat ) {  
		randomDigit = Math.floor(Math.random() * ((maxFloat-minFloat)+1) + minFloat);
	} else {
		error = new Error("Invalid parameters (max =< min)");
    }

    if ( typeof callback == 'function' ){
		setTimeout(() => callback(error, randomDigit), delay);
	} else {
		console.log('Callback is absent.');
	}
}

console.log("=============app start============");
random(2, 12, 2000, (error, data) => {
	if (typeof error != "undefined" ) {
		console.log("Error has happened:");
		throw error;
	} else {
		console.log('data=', data);
	}
	
});
console.log("============app end===============");
