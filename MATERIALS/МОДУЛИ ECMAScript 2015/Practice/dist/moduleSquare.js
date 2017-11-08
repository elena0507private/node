'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.foo = foo;
//please, run node app.js to view some results

function foo() {

	console.log('Modules: calculations: (function run with params: foo(3,2);)');

	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var argums = args,
	    s = null,
	    p = 0,
	    hasErrors = false,
	    mul = 1,
	    sum = 0;

	if (args.length != 2) {
		console.log('Please, input correct params');
		hasErrors = true;
		return false;
	}

	argums.filter(function (v) {
		if (isNaN(v) || parseFloat(v) < 0) {
			hasErrors = true;
		}
	});

	if (hasErrors == true) {
		console.log('Please, input correct params. They should be more than 0 and numerical.');
		return false;
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = argums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var val = _step.value;

			if (val && s == null) {
				s = 1;
			}
			s = s * val;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = argums[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var v1 = _step2.value;

			sum = sum + v1;
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	p = sum * 2;

	console.log('S = ', s == null ? 'result is not defined' : s);
	console.log('P = ', p);
}