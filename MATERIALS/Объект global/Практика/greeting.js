module.exports.getSqrt = () => { 

   if( typeof global.digit == "undefined" || isNaN(global.digit)) {
		console.log("Any digit has not been set or digit is not a number!");
		return false;
   }

   if ( parseFloat(global.digit) < 0 ){
		console.log("Please, enter digit more than 0");
		return false;
   }

   let sqrt = Math.sqrt(global.digit);
   console.log('sqrt=', sqrt);
   return true;
};

