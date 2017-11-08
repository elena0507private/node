const stream = require("stream");
class TypeTransform extends stream.Transform {
	constructor(a) {
		super({objectMode: true});
	}

	_transform(chunk, encoding, callback) {
		console.log("chunk444=", chunk)
		var newChank = chunk.toString().toLowerCase();
		this.push(newChank.replace(/ /g, ''));
		callback();
	}
}

module.exports = TypeTransform;
